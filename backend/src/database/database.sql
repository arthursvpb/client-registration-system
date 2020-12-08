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
