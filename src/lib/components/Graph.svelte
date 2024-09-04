<script>
import { onMount } from 'svelte';
import RootContent from '$lib/components/RootContent.svelte'; 
import NodeContentTemplate from './NodeContentTemplate.svelte';
import WorkContent from './WorkContent.svelte';
import ProjectContent from './ProjectContent.svelte';
import RecognitionContent from './RecognitionContent.svelte';
import RandomContent from './RandomContent.svelte';
import CoolPeople from './CoolPeople.svelte';
import * as d3 from 'd3';
import Modal from './Modal.svelte';

let showModal = false;
function recalculateForeignObject(node, simulation) {
    node.append("foreignObject")
        .attr("x", -100) 
        .attr("y", -100)
        .each(function (d) {
            const container = this; 
            const component = new d.component({
                target: container,
                props: d.props
            });

            requestAnimationFrame(() => {
                const boundingBox = container.firstElementChild.getBoundingClientRect();
                const newRadius = Math.max(boundingBox.width, boundingBox.height) / 2;
                d.radius = newRadius;

                d3.select(container)
                    .attr("width", boundingBox.width)
                    .attr("height", boundingBox.height)
                    .attr("x", -boundingBox.width / 2) 
                    .attr("y", -boundingBox.height / 2);

                simulation.force("collision").radius(d => d.radius);
                simulation.alpha(1).restart();
            });
        });
}

onMount(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const handleResize = () => {
         width = window.innerWidth;
         height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

    let childNodesVisible = false;
    
    let nodes = [
        { id: "root", component: RootContent, radius: 0,  fx: width / 2, y: height/2}, 
        { id: "child2", component: ProjectContent, radius: 0, fy: height*3/4 }, 
        { id: "child3", component: RecognitionContent, radius: 0 }, 
        { id: "child1", component: WorkContent, radius: 0, fx: width/4 },
        { id: "child4", component: RandomContent, radius: 0, fx: width *3/4, y: height}, //random

    ];

    const linkDistance = link => {
        if (width < 500) {
            if (link.source.id === "child4") {
            return 20; 
        }
        return 50; 
        } else 
        {if (link.source.id === "child4") {
            return width /12; 
        }
        return width / 4; }
    };

    let links = [
        { source: "root", target: "child1" },
        { source: "root", target: "child2" },
        { source: "root", target: "child3" },
        { source: "root", target: "child4" }
    ];

    const svg = d3.select("#d3-container")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(linkDistance))
        .alpha(0.3)
        .alphaDecay(0.05)
        .alphaTarget(0.1)
        .force("charge", d3.forceManyBody().strength(d => {
        if (d.id === "root") {
            return -10000;  
        } else if (d.id.includes("random")) {
            return 100;  
        } else {
            return -1000;  
        }
    }))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(d => d.radius))
        .on("tick", ticked);

    let link = svg.append("g")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", 2)
        .attr("stroke", "#999");

    let node = svg.append("g")
        .selectAll(".node")
        .data(nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    recalculateForeignObject(node, simulation);
    node.filter(d => d.id === "randomchild1")
        .on("click", function(event, d) {
            console.log("click");
            showModal = true;
        });
    //toggle random nodes collapse and expand
    node.filter(d => d.id === "child4")
        .on("click", function(event, d) {
            childNodesVisible = !childNodesVisible;
            if (childNodesVisible) {
                // Find the position of the parent node (child4)
            const parentNode = nodes.find(n => n.id === "child4");
            const parentX = parentNode.x;
            const parentY = parentNode.y;
            // Add child nodes close to the parent node's position
            nodes = nodes.concat([
                { id: "randomchild1", component: CoolPeople, radius: 0, parent: "child4", fx: parentX }, 
                // { id: "randomchild2", component: NodeContentTemplate, radius: 0, parent: "child4", fx: parentX}, 
                // { id: "randomchild3", component: NodeContentTemplate, radius: 0, parent: "child4", x: parentX, y: parentY - 50 }
            ]);
                links = links.concat([
                    { source: "child4", target: "randomchild1", x: width/2 },
                    // { source: "child4", target: "randomchild2" },
                    // { source: "child4", target: "randomchild3" }
                ]);
            } else {
                nodes = nodes.filter(n => n.parent !== "child4");
                links = links.filter(l => l.source.id !== "child4");
            }
            updateGraph();
            node.filter(d => d.id === "randomchild1")
        .on("click", function(event, d) {
            console.log("click");
            showModal = true;
        });
        });
    // Add hover effect for scaling non-root nodes
    node.filter(d => d.id !== "root")
        .on("mouseover", function(event, d) {
            d3.select(this).select("foreignObject")
                .transition()
                .duration(300)
                .style("transform", "scale(1.25)");
        })
        .on("mouseout", function(event, d) {
            d3.select(this).select("foreignObject")
                .transition()
                .duration(300)
                .style("transform", "scale(1)");
        });
    function updateGraph() {
        link = link.data(links);
        link.exit().remove();
        link = link.enter().append("line")
            .attr("stroke-width", 2)
            .attr("stroke", "#999")
            .merge(link);

        node = node.data(nodes);
        node.exit().remove();
        const nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));
        const nodeEnterFiltered = nodeEnter.filter(d => d.id.includes('randomchild'));
        recalculateForeignObject(nodeEnterFiltered, simulation);
        node = nodeEnter.merge(node);
        simulation.nodes(nodes);
        simulation.force("link").links(links);
        simulation.force("collision").radius(d => d.radius+10);
        simulation.alpha(0.3).restart();
        simulation.force("link", d3.forceLink(links).id(d => d.id).distance(linkDistance));
    }

// d3Utilities
    function ticked() {
        nodes.forEach(d => {
            d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
            d.y = Math.max(d.radius, Math.min(height - d.radius, d.y));
        });

        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node.attr("transform", d => `translate(${d.x},${d.y})`);
    }

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
});
</script>

<div id="d3-container"></div>
<Modal bind:showModal>
	<h3 slot="header">
		A list of cool people
		<!-- <small><em>adjective</em> mod·al \ˈmō-dəl\</small> -->
	</h3>

	<ul >
        <li><a href="https://github.com/r2dev2" style="color: black;">r2dev2</a></li>
	</ul>

</Modal>
