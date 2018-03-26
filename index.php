<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Dashboard</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.css">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
	<script type="text/javascript">
		window.onload = function () {
			drawCPUChart();
			//drawRAMChart();
			/*drawDownloadChart();
			drawUploadChart();
			drawDiskChart();*/
			var intervalId;
			var int;
			int = document.getElementById('refreshFrequency').value;
			intervalId = setInterval(function () {
				drawCPUChart();
				//drawRAMChart();
				/*drawDownloadChart();
				drawUploadChart();
				drawDiskChart();*/
			}, int);
			document.getElementById('refreshFrequency').onchange = function () {
				if (intervalId) {
					clearInterval(intervalId);
				}
				int = document.getElementById('refreshFrequency').value;
				intervalId = setInterval(function () {
					drawCPUChart();
					//drawRAMChart();
					/*drawDownloadChart();
					drawUploadChart();
					drawDiskChart();*/
				}, int);
			}
		}
	</script>
</head>

<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-7 text-center">
				<a href="command.php">Custom Command</a>
			</div>
			<div class="col-sm-3 text-center">
				<div class="input-group">
					<span class="input-group-addon" style="color:red;padding:6px 0px;">Refresh Frequency</span>
					&nbsp;
					<select id="refreshFrequency" class="form-control">
						<option value="5000" selected>5 Seconds</option>
						<option value="15000">15 Seconds</option>
						<option value="30000">30 Seconds</option>
						<option value="60000">1 Minute</option>
					</select>
				</div>
			</div>
			<div class="col-sm-2 text-right">
				<div class="btn-group">
					<button id="day" class="btn btn-primary" style="width:62px;height:38px;">Day</button>
					<button id="night" class="btn btn-dark" style="width:62px;height:38px;">Night</button>
				</div>
			</div>
		</div>
	</div>
	<br />
	<div class="container">
		<div class="row">
			<div class="col-sm-2 text-center"></div>
			<div class="col-sm-3 text-center">
				<a href="details.php?detail=CPUU">CPU</a>
				<canvas id="cpuChart" width="300" height="300"></canvas>
			</div>
			<div class="col-sm-2 text-center"></div>
			<div class="col-sm-3 text-center">
				<a href="details.php?detail=RAMU">RAM</a>
				<div id="ramChart" width="300" height="300"></div>
			</div>
			<div class="col-sm-2 text-center"></div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-sm-2 text-center"></div>
			<div class="col-sm-3 text-center">
				<a href="details.php?detail=NETU">Network ↓</a>
				<div id="downloadChart"></div>
			</div>
			<div class="col-sm-2 text-center"></div>
			<div class="col-sm-3 text-center">
				<a href="details.php?detail=NETU">Network ↑</a>
				<div id="uploadChart"></div>
			</div>
			<div class="col-sm-2 text-center"></div>
		</div>
	</div>
	<div class="container">
		<div class="row ">
			<div class="col-sm-2 text-center"></div>
			<div class="col-sm-3 text-center">
				<a href="details.php?detail=DISU">Disk</a>
				<div id="diskChart"></div>
			</div>
			<div class="col-sm-7 text-center"></div>
		</div>
	</div>
</body>
<script type="text/javascript" src="js/cpuChart.js"></script>
<script type="text/javascript" src="js/ramChart.js"></script>
<script type="text/javascript" src="js/downloadChart.js"></script>
<script type="text/javascript" src="js/uploadChart.js"></script>
<script type="text/javascript" src="js/diskChart.js"></script>
<script type="text/javascript">
	document.getElementById("day").addEventListener("click", function (event) {
		(function (event) {
			document.body.style.color = "black";
			document.body.style.background = "white";
		}).call(document.getElementById("day"), event);
	});
	document.getElementById("night").addEventListener("click", function (event) {
		(function (event) {
			document.body.style.color = "white";
			document.body.style.background = "black";
		}).call(document.getElementById("night"), event);
	});
</script>

</html>
