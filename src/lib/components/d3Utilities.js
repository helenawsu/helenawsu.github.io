// d3Utilities.js

export function ticked(nodes, link, width, height) {
    nodes.forEach(d => {
        d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
        d.y = Math.max(d.radius, Math.min(height - d.radius, d.y));
    });

    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    nodes.attr("transform", d => `translate(${d.x},${d.y})`);
}

export function dragstarted(event, d, simulation) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

export function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

export function dragended(event, d, simulation) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
