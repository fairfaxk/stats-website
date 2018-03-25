d3.csv("resources/cpu-usage.csv", function (data) {
	data.forEach(function (d) {
		data.USAGE = +data.USAGE;
		//console.log(data);
	})
	drawCPUChart(data);
})

function drawCPUChart(data){

	var latestData = [100 - data[59].USAGE, data[59].USAGE];

	var svg = d3.select("#cpu-chart").append("svg")
	    .attr("width", w)
	    .attr("height", h)
	    .append("g")
	    .attr("class", "arc")
	    .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

	CPUpath = svg.selectAll("g.arc")
	    .data(pie(latestData))
	    .enter()
	    .append("path")

	CPUpath.transition()
	    .duration(1000)
	    .attr("fill", function(d, i) {
	        return color(i);
	    })
	    .attr("d", arc)
	    .each(function(d) {
	        this._current = d;
	    }); // store the initial angles
	CPUpath.select(function(){
		return this.parentNode;
	})
	.append("text")
		.attr("transform", function (d) {
			return "translate(" + arc.centroid(d) + ")";
		})
		.attr("text-anchor", "middle")
		.text(function (d) {
			if (d.index == 0)
				return "Unused:"
			else {
				return "Used:"
			}
		});
	CPUpath.select(function(){
		return this.parentNode;
	})
	.append("text")
		.attr("transform", function (d) {
			return "translate(" + arc.centroid(d) + ")";
		})
		.attr("text-anchor", "middle")
		.attr("dy", "1em")
		.text(function (d) {
			return d.value + '%';
		});
}

function CPUchange(data) {
		var latestData = [100 - data[59].USAGE, data[59].USAGE];
		CPUpath.data(pie(latestData));
		CPUpath.transition().duration(1000).attrTween("d", arcTween); // redraw the arcs

		// Store the displayed angles in _current.
		// Then, interpolate from _current to the new angles.
		// During the transition, _current is updated in-place by d3.interpolate.

		function arcTween(a) {
				var i = d3.interpolate(this._current, a);
				this._current = i(0);
				return function(t) {
						return arc(i(t));
				};
		}
}