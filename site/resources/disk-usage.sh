#!/bin/bash

echo "DATE,USAGE,TOTAL" > disk-usage.txt

while [ 1 -eq 1 ]
do

echo -n `date | awk '{print $4}'`"," >> disk-usage.txt
echo -n $(df -BM | grep '/$' | awk '{print $3}' | sed 's/[^0-9]*//g') >> disk-usage.txt && echo -n ',' >> disk-usage.txt && echo $(df -BM | grep '/$' | awk '{print $2}' | sed 's/[^0-9]*//g') >> disk-usage.txt


if [ "$(cat disk-usage.txt | wc -l)" == "62" ]
then
sed -i -e '2d' disk-usage.txt
fi

sleep 1

done
