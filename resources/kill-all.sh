#!/bin/bash

kill -9 `ps ax | grep '\-usage.sh' | grep -v grep | awk '{print $1}'`
