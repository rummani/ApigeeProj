#!/bin/bash
pwd
source ./setup/setenv.sh

echo "Enter your password for the Apigee Enterprise organization $org, followed by [ENTER]:"

read -s password

echo Deploying $api_name to $env on $url using $username and $org and $pwd
pwd
./tools/deploy.py -n $api_name -u $username:$pwd -o $org -h $url -e $env -p / -d ./$api_name

echo "If 'State: deployed', then your API Proxy is ready to be invoked."

echo "Run 'invoke.sh'"
