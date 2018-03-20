#!/bin/bash

kill `ps ax | grep '\-usage.sh' | grep -v grep | awk '{print $1}'`