#!/usr/bin/env bash

npm run build # build vue app
docker build -t myapp . # build backend
