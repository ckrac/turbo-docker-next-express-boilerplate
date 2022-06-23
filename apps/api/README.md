# Running Locally

## Build docker containers

- `yarn docker:dev`

## Migrate dev and test databases

- `yarn docker:ssh-api`
- `yarn migration:run`

## Docker commands to prune docker data

- `docker system prune -a`
- `docker volume prune`
