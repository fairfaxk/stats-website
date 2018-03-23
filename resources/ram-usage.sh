#!/bin/bash

echo "DATE,USAGE,TOTAL" > ram-usage.csv

while [ 1 -eq 1 ]
do

echo -n `date | awk '{print $4}'`"," >> ram-usage.csv
echo $(free -m | grep Mem | awk '{print $3 "," $2}') >> ram-usage.csv


if [ "$(cat ram-usage.csv | wc -l)" == "62" ]
then
sed -i -e '2d' ram-usage.csv
fi

sleep 1

done
