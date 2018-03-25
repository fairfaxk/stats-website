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

var pie = d3.pie()
	.sort(null);

//Easy colors accessible via a 10-step ordinal scale
var color = d3.scaleOrdinal()
	.domain(d3.range(2))
	.range(['#C0C0C0', '#007bff']);

var CPUpath;
var RAMpath;
var DOWNLOADpath;
var UPLOADpath;
var DISKpath;