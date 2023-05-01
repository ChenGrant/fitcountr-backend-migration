#!/bin/bash
env=$1

export ENV=$env

commands=(
    "cd ./api_gateway && npm run $env"
    "cd ./microservices/progress && npm run $env"
    "cd ./microservices/users && source .venv/bin/activate && cd ../../src && python manage.py runserver"
)

# Loop through directories and execute commands
for command in "${commands[@]}"
do
    gnome-terminal --tab --title="Terminal for $command" --working-directory="$HOME/path/to/your/directory" -e "bash -c \"$command ; exec bash\""
done