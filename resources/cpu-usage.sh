#!/bin/bash

echo "DATE,USAGE" > cpu-usage.csv

while [ 1 -eq 1 ]
do

echo -n `date | awk '{print $4}'`"," >> cpu-usage.csv
varr=$(echo "100.00 " `mpstat | grep all | awk '{print $NF}'` | awk '{print $1 - $2}')
echo $varr >> cpu-usage.csv

if [ "$(cat cpu-usage.csv | wc -l)" == "62" ]
then
sed -i -e '2d' cpu-usage.csv
fi

sleep 1

done
