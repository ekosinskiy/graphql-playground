# Dev environment

All environment run in the docker. If you don't have docker installed
go to this link https://docs.docker.com/engine/install/ and install it, depends on your OS.
You also need to set up docker compose, use this link https://docs.docker.com/compose/install/

## How to run?

- copy file from `docker/.env.example` to `docker.env`
- `make build` or `docker-compose build`
- `make start` or `docker-compose up -d`
- `make init`, when you see message **Task was executed** click **Ctrl+C**
- `make dev-server` or `docker-compose exec nodejs bash -c "npm run debug"` when you see in the terminal `Server ready at http://localhost:3000/` open browser and use this link

if you want to connect to container with server project `make shell` or `docker-compose exec nodejs bash`
For running test execute `make test` or `docker-compose exec nodejs bash -c "npm test"`

