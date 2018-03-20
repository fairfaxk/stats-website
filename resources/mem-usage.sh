#!/bin/bash

echo "DATE,USAGE,TOTAL" > mem-usage.txt

while [ 1 -eq 1 ]
do

echo -n `date | awk '{print $4}'`"," >> mem-usage.txt
echo $(free -m | grep Mem | awk '{print $3 "," $2}') >> mem-usage.txt


if [ "$(cat mem-usage.txt | wc -l)" == "62" ]
then
sed -i -e '2d' mem-usage.txt
fi

sleep 1

done
