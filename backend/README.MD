# Django

This is a Django 4 web application working as a API that exposes 2 services and it is deployed using Vercel with Serverless Functions using the [Python Runtime](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python).

## Requirements:

- Git
- Python3
- PostgreSQL 15
- `.env` file (see `.env-example`)

## Running Locally

### Create a python virtual environment for this project:

- `python3 -m virtualenv env`

### If you don't have virtualenv, install it:

- `python3 -m pip install virtualenv`

### After installation is complete, activate the virtual environment:

| Linux                     | Windows 10               |
| ------------------------- | ------------------------ |
| `source env/bin/activate` | `.\env\Scripts\activate` |

### Install the dependencies:

- `pip install -r requirements.txt`

### Create a .env file:

- Make a copy of `.env.example`, rename it to `.env`, and change it according to you local configuration.

### Database

- If you haven't done so already, create an empty database on PostgreSQL.

- Its name needs to match the one on the `DB_DATABASE` environment variable.

### Run the Django application:

- `python manage.py runserver`

### Your Django application is now available at `http://localhost:8000`.

# Test

To run tests or just for populate initial data, you can run these fixtures:

- `python manage.py loaddata initial_waiters`
- `python manage.py loaddata initial_tables`
- `python manage.py loaddata initial_products`
