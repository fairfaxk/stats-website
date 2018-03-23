<?php
if (!empty($_GET["act"])){
	$file = "resources/customCommands.txt";
	// Delete all commands
	if(htmlspecialchars($_GET["act"]) == "clear"){
		file_put_contents($file, "");
	}
	// Delete specific command
	elseif(htmlspecialchars($_GET["act"]) == "delete"){
		$current = file_get_contents($file);
		$toDelete = htmlspecialchars($_GET["command"]);
		$toDelete = htmlspecialchars_decode($toDelete);
		$out = "";

		foreach(preg_split("/((\r?\n)|(\r\n?))/", $current) as $line){
			if($line != $toDelete){
				$out .= $line;
				$out .= "\n";
			}
        }

		file_put_contents($file, $out);
	}
	// Add command to end of file
	else{
        $current = file_get_contents($file);
        $current .= htmlspecialchars($_GET["command"]);
        $current .= "\n";
        $current = htmlspecialchars_decode($current);
        file_put_contents($file, $current);
	}
	header("Location: command.php");
}else{
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Custom Command</title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <script type="text/javascript" src="js/custom.js"></script>
    <script type="text/javascript">
		window.onload = function () {
            var intervalId;
            var int;
			getText("customCommandsOutput", "resources/customCommandsOutput.txt");
			int = 5000;
			intervalId = setInterval(function () {
				getText("customCommandsOutput", "resources/customCommandsOutput.txt");
			}, int);
		}
	</script>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <a href="index.php">Dashboard</a>
            </div>
        </div>
    </div>
    <br />
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <form action="command.php" method="get" class="form-group input-group">
                    <input type="hidden" name="act" value="run">
                    <input type="text" name ="command" class="form-control">
                    <input type="submit" value="Add Command" class="btn btn-success">
                </form>

                <form action="command.php" method="get" class="form-group input-group">
                    <input type="hidden" name="act" value="delete">
                    <input type="text" name ="command" class="form-control">
                    <input type="submit" value="Delete Command" class="btn btn-danger">
                </form>

                <form action="command.php" method="get">
                    <input type="hidden" name="act" value="clear">
                    <input type="submit" value="Clear All Commands" class="btn btn-primary">
                </form>
            </div>
        </div>
    </div>
    <br />
    <div class="container">
        <div class="row">
            <div class="col-sm-8 text-center">
                <b>Custom Commands Output</b>
                <div class="border border-primary">
                    <div id="customCommandsOutput">
                    </div>
                </div>
            </div>
            <div class="col-sm-4 text-center">
                <?php
                    $str = "<b>Current Custom Commands</b><div class='border border-primary'>";
                    $file = "resources/customCommands.txt";
                    $current = file_get_contents($file);

                    foreach(preg_split("/((\r?\n)|(\r\n?))/", $current) as $line){
                        if($line != ""){
                            $str .= "<br />" . $line;
                        }
                    }

                    $str .= "<br /><br /></div>";
                    echo $str;
                    }
                ?>
            </div>
        </div>
    </div>
</body>

</html>
