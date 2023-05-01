from dotenv import load_dotenv
import os
import json

def configure_env():
  match os.environ.get("ENV"):
    case "dev": load_dotenv("../.env.dev")
    case "prod": load_dotenv("../.env.prod")
  
  return {
    "ENV": os.environ.get("ENV"),
    "SECRET_KEY": os.environ.get("SECRET_KEY"),
    "DEBUG": os.environ.get("DEBUG") == "TRUE",
    "ALLOWED_HOSTS": json.loads(os.environ.get("ALLOWED_HOSTS")),
  }
  
  