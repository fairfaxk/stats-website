#!/bin/bash
# USAGE:
# ./executeEveryLine customCommandsFile customCommandsOutputFile &

newline=`echo`

while [ 1 -eq 1 ]
do

 echo > $2

 while read line;
 do
         if [ "$line" != "$newline" ]
         then

                 echo "$line:" >> $2
		 echo "========================" >> $2
                 eval "$line" &>> $2
		 echo >> $2

         fi
 done < "$1"

 sleep 1;

done
