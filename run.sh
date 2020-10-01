#!/bin/bash
for i in {1..5}
do
  curl -i localhost:8080 &
  sleep 1
done
