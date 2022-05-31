## Running Locally

### Build docker containers

- `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build`

SSH to containers

- [api] `docker exec -it api_api_1 /bin/sh`
- [database]
  - `docker exec -it api_database_1 bash`
  - `psql -d dev -U dev`
