//Width and height
var w = 300;
var h = 300;

var parseDate = d3.timeParse("%H:%M:%S");
var formatTime = d3.timeFormat("%H:%M:%S");

var outerRadius = w / 2;
var innerRadius = w / 5;
var arc = d3.arc()
	.innerRadius(innerRadius)
	.outerRadius(outerRadius);

var pie = d3.pie();

//Easy colors accessible via a 10-step ordinal scale
var color = d3.scaleOrdinal()
	.domain(d3.range(2))
	.range(['#00FF00', '#FF0000']);

//var dataset = [ 5, 10, 20, 45, 6, 25 ];

d3.csv("resources/cpu-usage.csv", function (data) {
	data.forEach(function (d) {
		data.USAGE = +data.USAGE;
		//console.log(data);
	})
	drawCPUChart(data);
})

function drawCPUChart(data) {
	var dataset = [100 - data[0].USAGE, data[0].USAGE];

	//Create SVG element
	var svg = d3.select('#cpu-chart')
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
		.attr("fill", function (d, i) {
			return color(i);
		})
		.attr("d", arc);

	//Labels
	arcs.append("text")
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
	arcs.append("text")
		.attr("transform", function (d) {
			return "translate(" + arc.centroid(d) + ")";
		})
		.attr("text-anchor", "middle")
		.attr("dy", "1em")
		.text(function (d) {
			return d.value + '%';
		});
}
