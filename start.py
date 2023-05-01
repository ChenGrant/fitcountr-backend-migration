import subprocess
import sys
import os

env = sys.argv[1]

os.environ["ENV"] = env

commands = [
    f"cd ./api_gateway && npm run {env}",
    f"cd ./microservices/progress && npm run {env}",
    "cd ./microservices/users && cd .venv/Scripts && activate && cd ../../src && python manage.py runserver"
]

# Loop through directories and execute commands
for command in commands:
    subprocess.Popen(['start', 'cmd', '/k', command], shell=True)
