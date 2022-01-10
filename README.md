# Flimmr

## Setup

* In the `backend` folder, run `npm install`

* In the `frontend` folder, run `npm install`

* In the `backend` folder, create a `.env` file with the following variables
```
PORT=5000
DB_USERNAME=auth_app
DB_PASSWORD=«auth_app user password»
DB_DATABASE=auth_db
DB_HOST=localhost
JWT_SECRET=«generate_strong_secret_here»
JWT_EXPIRES_IN=604800
```
## Sequelize Setup

* Create a user with the ability to create databases using the credentials in the `.env` file
* Create a database `auth_db`
* Run `npx dotenv sequelize db:migrate` to run migration files
* Run `npx dotenv sequelize db:seed:all` to populate database.

## Run

* In the `backend` folder, run `npm start`
* In the `frontend` folder, run `npm start`
