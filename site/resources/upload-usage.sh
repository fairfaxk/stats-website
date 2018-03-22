#!/bin/bash

echo "DATE,USAGE" > upload-usage.csv

while [ 1 -eq 1 ]
do

totalBytes=`cat /proc/net/dev | grep ':' | head -n 1 | awk '{print $10}'`
sleep 1
totalBytesLater=`cat /proc/net/dev | grep ':' | head -n 1 | awk '{print $10}'`

kbps=`echo "$totalBytes $totalBytesLater" | awk '{print ($2 - $1)/1000}'`

echo -n `date | awk '{print $4}'`"," >> upload-usage.csv
echo "$kbps" >> upload-usage.csv

if [ "$(cat upload-usage.csv | wc -l)" == "62" ]
then
sed -i -e '2d' upload-usage.csv
fi

done
