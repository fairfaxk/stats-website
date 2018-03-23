#!/bin/bash



chmod 666 *.txt

chmod 666 *.csv

chmod 777 *.sh



./cpu-usage.sh & ./ram-usage.sh & ./disk-usage.sh & ./download-usage.sh & ./upload-usage.sh & ./executeEveryLine-usage.sh 'customCommands.txt' 'customCommandsOutput.txt' &