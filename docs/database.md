# Database

For development, this will be included into the `Branched` app. When ready for production, we will need to migrate the database into its own repo.

## Containerization

When deploying this DB for testing, we can Dockerize the DB for our local dev environment.
We will need a `bootstrap-db` file to pull in the DBs repo and spin up the database locally. 

## Repo Mode

* Repo mode: True
We can have app run in repo mode, which means the app does not need a DB. Instead it will read data from the repo itself. The app can be configured with actions to run via a cron schedule.

* Repo Mode: False
If app is not in repo mode, then we can tell app to connect to DB.