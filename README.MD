# FairPay Monorepo

## Introduction

This is the code base behind the [FairPay] website.
This documentation was produced by Luis Villadiego in Jun of 2023 on behalf of Leanware assessment.

## Structure

- Monorepo project
  - Backend: Django API
  - Frontend: React with Tailwindcss
  - Hosting: Vercel
  - Graphql: https://hasura.io/
  - Database: PostgreSQL (https://neon.tech/)

## To run the project in local:

    * For backend follow instructions in the README from /backend
    * For frontend follow instructions in the README from /frontend

## Local Development Setup

- Install (either from source or through a tool such as pyenv) Python version 3.7.2
- Create a virtual environment in the base project directory `path/to/python3.7.2 -m venv venv`
- Activate the virtual environment
- Initialize git within the project directory with `git init`
- After receiving access in github, pull down the project's master branch
- Save media assets for development to your local computer (required to have images appear properly during local development)

## Fixtures

You can use these fixtures to populate test data

- python manage.py loaddata initial_waiters
- python manage.py loaddata initial_tables
- python manage.py loaddata initial_products
