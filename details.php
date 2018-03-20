<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Details</title>
    <link rel="stylesheet" type="text/css" href="bootstrap.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-7 text-center">
                <a href="index.php">Dashboard</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
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
            <div class="col-sm-12 text-center">
                <?php
                    if ($_GET["detail"] == "CPUU"){
                        echo "CPU USAGE";
                    }else if ($_GET["detail"] == "RAMU"){
                        echo "RAM USAGE";
                    }else if ($_GET["detail"] == "GPUU"){
                        echo "GPU USAGE";
                    }else if ($_GET["detail"] == "DISU"){
                        echo "DISK USAGE";
                    }else if ($_GET["detail"] == "NETD"){
                        echo "NETWORK DOWNLOAD USAGE";
                    }else if ($_GET["detail"] == "NETU"){
                        echo "NETWORK UPLOAD USAGE";
                    }else{
                        header('Location: index.php');
                    }
                ?>
            </div>
        </div>
    </div>
</body>
<script type="text/javascript">
	document.getElementById("day").addEventListener("click", function (event) {
		(function (event) {
			document.body.style.color ="black";
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