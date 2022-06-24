# Running Locally

- Build docker containers
  - `yarn docker:dev`
- Migrate dev and test databases
  - `yarn docker:ssh-api`
  - `yarn migration:run`

# Docker commands to prune docker data

- `docker system prune -a`
- `docker volume prune`

# Testing

- create test db
  - `yarn docker:ssh-db`
  - `CREATE DATABASE kakarot_test OWNER kakarot;`
- run migrations
  - `yarn docker:ssh-api`
  - `yarn migration-test:run`
- run tests
  - `yarn docker:ssh-api`
  - `yarn test`
