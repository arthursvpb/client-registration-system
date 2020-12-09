## Client Registration System

Client Registration System is a web application that can register, update, delete and list persons.

## Tecnologies

This project was built using the following technologies:

### Backend

- REST API:
  - [NodeJS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
- Database + driver:
  - [MySQL](https://www.mysql.com/)
  - [Knex](http://knexjs.org/)

### Frontend

- [React](https://reactjs.org/)

## API Endpoints

- Index: `GET` /person
- Show: `GET` /person/id
- Create: `POST` /person
- Update: `PUT` /person/id
- Destroy: `DELETE` /person/id

## Running the application

Setting up database:

It is necessary having MySQL, Node, Git and Insomnia or Postman.

```shell
git clone https://github.com/arthursvpb/client-registration-system.git
cd client-registration-system
```

Install dependencies and start backend server. 
```
cd backend
yarn install
yarn start
```

Install dependencies and start frontend client. 
```
cd frontend
yarn install
yarn start
```

Run the SQL file from: `./src/backend/src/database/database.sql` to generate the database:

```sql
CREATE DATABASE clientregistrationsystem;
USE clientregistrationsystem;

CREATE TABLE Person(
    id int auto_increment not null,
    cpf varchar(20) not null,
    name varchar(100) not null,
    email varchar(100),
    birthday date not null,
    nationality varchar(20),
    createdAt date,
    updatedAt date,
    primary key(id, cpf)
);
```

Change the file: `backend/src/database/connection.js` and put your MySQL root login and password:

```js
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "{YOUR-PASSWORD}",
    database: "clientregistrationsystem",
  },
});

module.exports = knex;
```
