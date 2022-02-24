# Flimmr

[Flimmr](https://flimmr.herokuapp.com/) is a clone site of Flickr, a website were users can store and share their photos. Flimmr is a fullstack application.

![Flimmr splashpage](https://res.cloudinary.com/ddxtopm0l/image/upload/v1642116273/Flimmr/Flimmer-splash-page_tvpodw.png)

## Technologies

- Frontend: Javascript React/Redux, HTML5, CSS
- Backend: JSON API
- Cloud Image Hosting: Cloudinary
- Database: PostgreSQL
- Hosting: Heroku
- Control System: GIT

## Features

Users can:
- sign up, log in, and log out
  * default users: anne@user.io; jan@user.io(demo); lars@user.io
- choose a demo site, with pre-loaded photos

Logged-in users can:
- see only the photos that they upload onto their photostream (C)
- upload, update, and delete photos (RUD)

## Screenshots

Upload Page
![Upload Page](https://res.cloudinary.com/ddxtopm0l/image/upload/v1642116938/Flimmr/Flimmr-upload-photo-page_m2myzh.png)

User Photostream
![Photostream](https://res.cloudinary.com/ddxtopm0l/image/upload/v1642116937/Flimmr/Flimmr-photostream-page_mukmpk.png)

Individual Photo Page
![Individual Photo Page](https://res.cloudinary.com/ddxtopm0l/image/upload/v1642116936/Flimmr/Flimmr-Single-Photo_Page_hp7k9t.png)

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
