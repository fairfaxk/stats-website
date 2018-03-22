#!/bin/bash

echo "DATE,USAGE" > cpu-usage.txt

while [ 1 -eq 1 ]
do

echo -n `date | awk '{print $4}'`"," >> cpu-usage.txt
varr=$(echo "100.00 " `mpstat | grep all | awk '{print $NF}'` | awk '{print $1 - $2}')
echo $varr >> cpu-usage.txt

if [ "$(cat cpu-usage.txt | wc -l)" == "62" ]
then
sed -i -e '2d' cpu-usage.txt
fi

sleep 1

done
