#!/bin/bash

echo "DATE,USAGE,TOTAL" > disk-usage.csv

while [ 1 -eq 1 ]
do

echo -n `date | awk '{print $4}'`"," >> disk-usage.csv
echo -n $(df -BM | grep '/$' | awk '{print $3}' | sed 's/[^0-9]*//g') >> disk-usage.csv && echo -n ',' >> disk-usage.csv && echo $(df -BM | grep '/$' | awk '{print $2}' | sed 's/[^0-9]*//g') >> disk-usage.csv


if [ "$(cat disk-usage.csv | wc -l)" == "62" ]
then
sed -i -e '2d' disk-usage.csv
fi

sleep 1

done
