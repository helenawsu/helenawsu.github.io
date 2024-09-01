<script>
    import { onMount } from 'svelte';
    import RootContent from '$lib/components/RootContent.svelte'; // Import your component
    import * as d3 from 'd3';
    import anime from './animejswrapper.js';


    onMount(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const nodes = [
            { id: "root", component: RootContent, radius: 0 }, // Start with a default radius of 0
            
            { id: "child1", radius: 30, text: "seyan", url: "https://helenawsu.github.io/seyan/" },
            { id: "child2", radius: 50, text: "sorry i'm empty", url: "https://imepmty.com/" },
            { id: "child3", radius: 60, text: "photography", url: "https://helenawsu.github.io/photography/" },
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
            // .alphaDecay(0.02)  // Slow down the alpha decay, default is 0.0228
            // .velocityDecay(0.2)  // Slow down velocity decay, default is 0.4
            .alpha(1)  // Start with zero alpha
            .alphaMin(0.001)  // Set a lower threshold to allow for a smoother finish
            .alphaDecay(0.05)  // Slow down decay to prolong the effect
            .alphaTarget(0.1)
            .force("charge", d3.forceManyBody().strength(-300))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collision", d3.forceCollide().radius(d => d.radius)) // Use the calculated radius for collision
            .on("tick", ticked);
        // Apply the random force every 3 seconds
        setInterval(() => {
            simulation.alphaTarget(0.1).restart();
        }, 1000);

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
            .attr("fill", "#69b3a2")
            

            node.filter(d => d.id !== "root")
    .append("foreignObject")
    .each(function(d) {
        d.animationPlayed = false; // Initialize a flag to track the animation state
    })
    .on("mouseover", function(event, d) {
        console.log("moucsein")
        if (!d.animationPlayed) {  // Check if the animation has already been played
            // Trigger the animation
            anime({
                targets: this,
                r: d.radius * 1.2, 
                duration: 300,
                easing: 'easeOutQuad'
            });
            // Create and animate the ripple effect
            const ripple = d3.select(this.parentNode)
                .append("circle")
                .attr("cx", d3.select(this).attr("cx"))
                .attr("cy", d3.select(this).attr("cy"))
                .attr("r", d.radius) 
                .attr("fill", "rgba(255, 165, 0, 0.3)") 
                .style("pointer-events", "none")
                .attr("class", "ripple");

            anime({
                targets: ripple.node(), 
                r: d.radius * 1.5, 
                opacity: 0, 
                duration: 800,
                easing: 'easeOutQuad',
                loop: false,
                complete: function() {
                    ripple.remove(); 
                }
            });

            d.animationPlayed = true; 
        }
    })
    .on("mouseout", function(event, d) {
        console.log("mouseout")
        d.animationPlayed = false;  
    })
    .attr("width", d => d.radius * 2) 
    .attr("height", d => d.radius * 2) 
    .attr("x", d => -d.radius) 
    .attr("y", d => -d.radius) 
    .append("xhtml:div")
    .style("display", "flex")
    .style("justify-content", "center")
    .style("align-items", "center")
    .style("width", "100%")
    .style("height", "100%")
    .html(d => `
        <a href="${d.url}" target="_blank" 
            style="
                text-decoration: none; 
                color: white; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                max-width: 100%;
                margin: 4rem;
                cursor: pointer;
            ">
            ${d.text}
        </a>
    `);



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

<div id="d3-container"></div>
