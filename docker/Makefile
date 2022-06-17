build:
	docker-compose build
start:
	docker-compose up -d
stop:
	docker-compose stop
init-data:
	docker-compose exec nodejs bash -c "npm install"
	docker-compose exec nodejs bash -c "npm run init"
shell:
	docker-compose exec nodejs bash
dev-server:
	docker-compose exec nodejs bash -c "npm run debug"
dev-server-init:
	docker-compose exec nodejs bash -c "npm install"
test-backend:
	docker-compose exec nodejs bash -c "npm test"

export prefix=$(shell source .env && echo $$COMPOSE_PROJECT_NAME | tr '[:upper:]' '[:lower:]')
reset:
	docker-compose down || true
	docker volume rm ${prefix}_mongoData || true
	docker-compose up -d --remove-orphans
