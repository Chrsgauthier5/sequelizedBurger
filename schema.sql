CREATE DATABASE sequelizedBurgers_db;
USE sequelizedBurgers_db;

CREATE TABLE chefs (
  id int AUTO_INCREMENT NOT NULL,
  chef_name varchar(30) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE customers (
  id int AUTO_INCREMENT NOT NULL,
  customer_name varchar(30) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE burgers(
	id int AUTO_INCREMENT NOT NULL ,
	burger_name varchar(255) NOT NULL,
	devoured boolean default false,
	createdAt TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (ChefId) REFERENCES chefs(id),
    FOREIGN KEY (CustomerId) REFERENCES customers(id)
);