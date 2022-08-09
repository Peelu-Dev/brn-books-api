CREATE TABLE categories(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE book(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description TEXT(10000) NOT NULL,
    title varchar(255) NOT NULL,
    url varchar(255) NOT NULL,
    PRIMARY KEY(id)
);






