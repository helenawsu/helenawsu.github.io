<script>
    import { onMount } from 'svelte';
    import RootContent from '$lib/components/RootContent.svelte'; // Import your component
    import * as d3 from 'd3';

    onMount(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const nodes = [
            { id: "root", component: RootContent, radius: 0 }, // Start with a default radius of 0
            
            { id: "child1", radius: 30, text: "seyan", url: "https://helenawsu.github.io/seyan/" },
            { id: "child2", radius: 50, text: "sorry i'm empty", url: "https://imepmty.com/" },
            { id: "child3", radius: 40, text: "photography", url: "https://helenawsu.github.io/photography/" },
            { id: "child4", radius: 30, text: "resume", url: "https://drive.google.com/file/d/1lk2t61f5mADALHl1LuW7USZ8-86D2fq8/view?usp=sharing" }
        ];

        const links = [
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
            .force("link", d3.forceLink(links).id(d => d.id).distance(150))
            .force("charge", d3.forceManyBody().strength(-300))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collision", d3.forceCollide().radius(d => d.radius)) // Use the calculated radius for collision
            .on("tick", ticked);

        const link = svg.append("g")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke-width", 2)
            .attr("stroke", "#999");

        const node = svg.append("g")
            .selectAll(".node")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        node.filter(d => d.id === "root")
            .append("foreignObject")
            .attr("x", -100) 
            .attr("y", -100)
            .attr("class", "hover-circle")
            .each(function (d) {
                const container = this; 
                const component = new d.component({
                    target: container,
                    props: d.props
                });

                requestAnimationFrame(() => {
                    const boundingBox = container.firstElementChild.getBoundingClientRect();
                    const newRadius = Math.max(boundingBox.width, boundingBox.height) / 2;
                    
                    d.radius = newRadius + 10;
                    d3.select(container)
                        .attr("width", boundingBox.width)
                        .attr("height", boundingBox.height)
                        .attr("x", -boundingBox.width / 2) 
                        .attr("y", -boundingBox.height / 2);

                    // Restart the simulation with the updated radius
                    simulation.force("collision").radius(d => d.radius);
                    simulation.alpha(1).restart();
                });
            });

        node.filter(d => d.id !== "root")
            .append("circle")
            .attr("r", d => d.radius)
            .attr("fill", "#69b3a2");

        node.filter(d => d.id !== "root")
            .append("foreignObject")
            .attr("width", d => d.radius * 2) 
            .attr("height", d => d.radius * 2) 
            .attr("x", d => -d.radius) 
            .attr("y", d => -d.radius) 
            .attr("class", "hover-circle")
            .append("xhtml:div")
            .style("display", "flex")
            .style("justify-content", "center")
            .style("align-items", "center")
            .style("width", "100%")
            .style("height", "100%")
            .html(d => `<a href="${d.url}" target="_blank" style="text-decoration: none; color: white; font-size: 12px;">${d.text}</a>`);

        function ticked() {
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

<style global>
    @keyframes wave {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
.hover-circle {
        transition: transform 0.5s, opacity 0.5s;
    }

    .hover-circle:hover {
        animation: wave 0.5s ease-in-out infinite;
    }
    #d3-container {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }

    svg {
        width: 100%;
        height: 100%;
    }
</style>

<div id="d3-container"></div>
