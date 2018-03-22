#!/bin/bash

echo "DATE,USAGE,TOTAL" > ram-usage.txt

while [ 1 -eq 1 ]
do

echo -n `date | awk '{print $4}'`"," >> ram-usage.txt
echo $(free -m | grep Mem | awk '{print $3 "," $2}') >> ram-usage.txt


if [ "$(cat ram-usage.txt | wc -l)" == "62" ]
then
sed -i -e '2d' ram-usage.txt
fi

sleep 1

done
