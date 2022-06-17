# Dev environment

## .env file

For more comfortable, after pull repository just rename file **.env.example** to **.env** and use it.

## Build

Before building project you have to rename file `docker/keys/bitbucket.example` to `docker/keys/bitbucket`
and put SSH key into it. After that building local environment run `docker-compose build` or run `make build`

## Run envs

There are several options exists to work with local environment

- Run all containers `make start` or `docker-compose up -d`
- Connect to container with server project `make backend` or `docker-compose exec nodejs bash`
- Run dev server for backend part with debugger mode `make dev-server` or `docker-compose exec nodejs bash -c "npm run debug"`
- Run tests for backend `make test-backend` or `docker-compose exec nodejs bash -c "npm test"`


## Initialization

- Before use platform we need 2 user groups - Super Admin and Default. Connect to container ```make backend``` 
and then run next command ```ts-node scripts/create-groups.ts```. After that, into the MongoDB must be created 2 groups.
- Create a new user, using UI or POST request. After that open database, 
  go to collection `usergroups`, find group name `Super Admin`, copy group ID as a String.
  Go to collection `users` find your user and replace group ID. It helps use that user without any restriction



### Attributes 

**COMPOSE_PROJECT_NAME** - prefix for docker container name

**BACKEND_HTTP_PORT** - HTTP port for server (commonly used port 3000)

**MONGODB_PORT** - external port for MongoDB, it will be using to connect from host machine to DB server

**MONGODB_HOST** - host name for mongodb server - must be has a value **mongo**

**MONGODB_INITDB_ROOT_USERNAME** - admin username for access to MongoDB

**MONGODB_INITDB_ROOT_PASSWORD** - admin password for access to MongoDB

**MONGODB_INITDB_DATABASE** - database name

**MONGODB_VP_USER** - username, which will be used inside the project for access to MongoDB

**MONGODB_VP_PASSWORD** - password, which will be used inside the project for access to MongoDB

