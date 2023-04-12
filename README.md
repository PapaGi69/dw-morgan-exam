
## DW Morgan Technical Exam by Reginald San Jose

Create a simple web application given the requirements below using any programming language and
PostgreSQL as the database.

Techstack: NestJS, PostGres

## Installation

```bash
## Fill in you local .env values. Here are my environment variables on my local.
DATABASE_HOST=localhost
DATABASE_NAME=examdb
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=9999

## Install npm first to install the node modules
$ npm install

## Run migration to create table covid_observation
$ npm run migration:run
```

## Running the app

```bash
# Running this code will now start the parsing process of CSV and will proceed to save to the PostGres Database
$ npm run start
```
# Web Application will now start.
![image](https://user-images.githubusercontent.com/112599286/231544229-6207656b-2308-417f-ab4b-627840716ac9.png)


## Postman Testing

```bash
GET: http://localhost:3000/top/confirmed?observation_date=2020-01-24&max_results=45
```

