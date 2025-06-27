<script>
import { onMount } from 'svelte';
import RootContent from '$lib/components/RootContent.svelte'; 
import NodeContentTemplate from './NodeContentTemplate.svelte';
import WorkContent from './WorkContent.svelte';
import ProjectContent from './ProjectContent.svelte';
import RecognitionContent from './RecognitionContent.svelte';
import RandomContent from './RandomContent.svelte';
import CoolPeople from './CoolPeople.svelte';
import HotPeople from './HotPeople.svelte';
import HotPeopleModal from './HotPeopleModal.svelte';
import CoolPeopleModal from './CoolPeopleModal.svelte'; // Import CoolPeopleModal
import CodeContent from './CodeContent.svelte'; // Import the new CodeContent component
import ArtContent from './ArtContent.svelte'; // Import the new ArtContent component
import Modeling from './Modeling.svelte';
import Photography from './Photography.svelte';
import Music from './Music.svelte';
import Berkeley from './BerkeleyContent.svelte'; // Import the new Berkeley components
import * as d3 from 'd3';

let showModal = false;
let showHotModal = false; // Add a variable for HotPeopleModal
let artNodesVisible = false; // Visibility state for art child nodes
let codeNodesVisible = false; // Visibility state for code child nodes
let randomNodesVisible = false; // Visibility state for random child nodes

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
        // { id: "child2", component: ProjectContent, radius: 0, fy: height*3/4 }, 
        // { id: "child3", component: RecognitionContent, radius: 0 }, 
        // { id: "child1", component: WorkContent, radius: 0, fx: width/4 },
        { id: "child4", component: RandomContent, radius: 0,}, //random
        { id: "code", component: CodeContent, radius: 0, },
        { id: "art", component: ArtContent, radius: 0, },


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
        // { source: "root", target: "child1" },
        // { source: "root", target: "child2" },
        // { source: "root", target: "child3" },
        { source: "root", target: "child4" },
        { source: "root", target: "code" },
        { source: "root", target: "art" },
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
            console.log("Cool People node clicked");
            showModal = true;
        });

    node.filter(d => d.id === "randomchild2") // Add click handler for HotPeople node
        .on("click", function(event, d) {
            console.log("Hot People node clicked");
            showHotModal = true;
        });

    // Helper function for toggling children
    function toggleChildren(parentId, flag, newNodes, newLinks) {
        // When expanding: add new nodes and links if not already present
        if (!flag) {
            newNodes.forEach(child => {
                if (!nodes.find(n => n.id === child.id)) {
                    nodes.push(child);
                }
            });
            newLinks.forEach(link => {
                if (!links.find(l => (l.source.id || l.source) === link.source && (l.target.id || l.target) === link.target)) {
                    links.push(link);
                }
            });
        } else { // When collapsing: remove all children that have parent === parentId
            for (let i = nodes.length - 1; i >= 0; i--) {
                if (nodes[i].parent === parentId) nodes.splice(i, 1);
            }
            for (let i = links.length - 1; i >= 0; i--) {
                if ((links[i].source.id || links[i].source) === parentId) links.splice(i, 1);
            }
        }
        updateGraph();
        return !flag;
    }

    // Define children for each group
    const codeChildrenNodes = [
        { id: "award", component: RecognitionContent, radius: 0, parent: "code" },
        { id: "project", component: ProjectContent, radius: 0, parent: "code" },
        { id: "work", component: WorkContent, radius: 0, parent: "code" }
    ];
    const codeChildrenLinks = [
        { source: "code", target: "award" },
        { source: "code", target: "project" },
        { source: "code", target: "work" }
    ];

    const artChildrenNodes = [
        { id: "modeling", component: Modeling, radius: 0, parent: "art" },
        { id: "photography", component: Photography, radius: 0, parent: "art" },
        { id: "music", component: Music, radius: 0, parent: "art" }
    ];
    const artChildrenLinks = [
        { source: "art", target: "modeling" },
        { source: "art", target: "photography" },
        { source: "art", target: "music" }
    ];

    const randomChildrenNodes = [
        { id: "randomchild1", component: CoolPeople, radius: 0, parent: "child4", fx: 0 },
        { id: "randomchild2", component: HotPeople, radius: 0, parent: "child4", fx: 0 },
        { id: "randomchild3", component: Berkeley, radius: 0, parent: "child4", fx: 0 }
    ];
    const randomChildrenLinks = [
        { source: "child4", target: "randomchild1" },
        { source: "child4", target: "randomchild2" },
        { source: "child4", target: "randomchild3" }
    ];

    // Add click handler for the CodeContent node
    node.filter(d => d.id === "code")
        .on("click", function(event, d) {
            codeNodesVisible = toggleChildren("code", codeNodesVisible, codeChildrenNodes, codeChildrenLinks);
        });

    // Add click handler for the ArtContent node
    node.filter(d => d.id === "art")
        .on("click", function(event, d) {
            artNodesVisible = toggleChildren("art", artNodesVisible, artChildrenNodes, artChildrenLinks);
        });

    //toggle random nodes collapse and expand
    node.filter(d => d.id === "child4")
        .on("click", function(event, d) {
            const parentNode = nodes.find(n => n.id === "child4");
            // Update fx (for positioning) in randomChildrenNodes:
            randomChildrenNodes.forEach(child => child.fx = parentNode.x);
            randomNodesVisible = toggleChildren("child4", randomNodesVisible, randomChildrenNodes, randomChildrenLinks);
            // (Re)attach click handlers for dynamic random children as needed.
            node.filter(d => d.id === "randomchild1")
                .on("click", function(event, d) {
                    console.log("Cool People node clicked");
                    showModal = true;
                });
            node.filter(d => d.id === "randomchild2")
                .on("click", function(event, d) {
                    console.log("Hot People node clicked");
                    showHotModal = true;
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
        // Rebind links with a composite key of source and target IDs.
        link = link.data(links, d => `${d.source.id}-${d.target.id}`);
        link.exit().remove();
        link = link.enter().append("line")
            .attr("stroke-width", 2)
            .attr("stroke", "#999")
            .merge(link);

        // Rebind nodes using each node's id as the key.
        node = node.data(nodes, d => d.id);
        node.exit().remove();
        const nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        const nodeEnterFiltered = nodeEnter; // Include all nodes without filtering

        recalculateForeignObject(nodeEnterFiltered, simulation);
        node = nodeEnter.merge(node);
        simulation.nodes(nodes);
        simulation.force("link").links(links);
        simulation.force("collision").radius(d => d.radius + 10);
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
<CoolPeopleModal bind:showModal />
<HotPeopleModal bind:showHotModal />
