#!/bin/bash
# USAGE:
# ./executeEveryLine customCommandsFile customCommandsOutputFile &

newline=`echo`

while [ 1 -eq 1 ]
do
 while read line;
 do
         if [ "$line" != "$newline" ]
         then

                 echo "Custom Command: $line" >> $2

                 eval "Output: $line" &>> $2

         fi
 done < "$1"

 sleep 1;

done