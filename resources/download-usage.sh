#!/bin/bash

echo "DATE,USAGE" > download-usage.txt

while [ 1 -eq 1 ]
do

totalBytes=`cat /proc/net/dev | grep ':' | head -n 1 | awk '{print $2}'`
sleep 1
totalBytesLater=`cat /proc/net/dev | grep ':' | head -n 1 | awk '{print $2}'`

kbps=`echo "$totalBytes $totalBytesLater" | awk '{print ($2 - $1)/1000}'`

echo -n `date | awk '{print $4}'`"," >> download-usage.txt
echo "$kbps" >> download-usage.txt

if [ "$(cat download-usage.txt | wc -l)" == "62" ]
then
sed -i -e '2d' download-usage.txt
fi

done
