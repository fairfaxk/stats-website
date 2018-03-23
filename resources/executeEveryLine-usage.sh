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

                 echo "Custom Command: $line" >> $1

                 eval "Output: $line" &>> $1

         fi
 done

 sleep 1;

done