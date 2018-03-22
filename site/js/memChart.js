d3.csv("../resources/ram-usage.csv", function(data) {
		data.forEach(function(d){
			data.USAGE=+data.USAGE;
      data.TOTAL=+data.TOTAL;
			//console.log(data);
		})
		drawMEMChart(data);
  })

function drawMEMChart(data){
	var dataset = [data[0].TOTAL-data[0].USAGE, data[0].USAGE ];

	//Create SVG element
	var svg = d3.select('#mem-chart')
				.append("svg")
				.attr("width", w)
				.attr("height", h);

	//Set up groups
	var arcs = svg.selectAll("g.arc")
				  .data(pie(dataset))
				  .enter()
				  .append("g")
				  .attr("class", "arc")
				  .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

	//Draw arc paths
	arcs.append("path")
	    .attr("fill", function(d, i) {
	    	return color(i);
	    })
	    .attr("d", arc);

	//Labels
	arcs.append("text")
	    .attr("transform", function(d) {
	    	return "translate(" + arc.centroid(d) + ")";
	    })
	    .attr("text-anchor", "middle")
	    .text(function(d) {
				if(d.index==0)
					return "Unused:"
				else {
						return "Used:"
				}
	    });
			arcs.append("text")
			    .attr("transform", function(d) {
			    	return "translate(" + arc.centroid(d) + ")";
			    })
			    .attr("text-anchor", "middle")
					.attr("dy", "1em")
			    .text(function(d) {
							return d.value + ' mb';
			    });
}
