# Dev environment

## .env file

For more comfortable, after pull repository just rename file **.env.example** to **.env** and use it.

## Build

Building local environment run `docker-compose build` or run `make build`

## Initialize

Before start using a project we have to make initialization,
run ```make init``` or ```docker-compose exec nodejs bash -c "npm run init"```

## Run envs

There are several options exists to work with local environment

- Run all containers `make start` or `docker-compose up -d`
- Connect to container with server project `make shell` or `docker-compose exec nodejs bash`
- Run dev server for backend part with debugger mode `make dev-server` or `docker-compose exec nodejs bash -c "npm run debug"`
- Run tests for backend `make test-backend` or `docker-compose exec nodejs bash -c "npm test"`

