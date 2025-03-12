/*
 CREATE DATABASE gomycode
 */
use gomycode;
/* DROP TABLE book_author;
 DROP TABLE loan;
 DROP TABLE author;
 DROP TABLE book;
 DROP TABLE member; */
CREATE TABLE Customer(
    customer_id VARCHAR(20) PRIMARY KEY,
    customer_name VARCHAR(20),
    customer_tel INT
);
CREATE TABLE Product(
    product_id VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(20),
    price INT CHECK (price > 0)
);
CREATE TABLE Orders(
    customer_id VARCHAR(20),
    product_id VARCHAR(20),
    quantity INT,
    total_amount INT
);
ALTER TABLE Author
MODIFY author_id INT AUTO_INCREMENT PRIMARY KEY;
CREATE TABLE BOOK (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title varchar(150),
    publication_year INT CHECK(publication_year > 1800),
    publisher varchar(100)
);
CREATE TABLE BOOK_AUTHOR(
    book_id INT,
    author_id INT,
    PRIMARY KEY(book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES BOOK(book_id),
    FOREIGN KEY (author_id) REFERENCES Author(author_id)
);
CREATE TABLE MEMBER(
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(32) NOT NULL,
    last_name varchar(32) NOT NULL,
    membership_date Date,
    email varchar(50) UNIQUE
);
CREATE TABLE LOAN(
    loan_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT,
    book_id INT,
    FOREIGN KEY(book_id) REFERENCES BOOK(book_id),
    FOREIGN KEY(member_id) REFERENCES MEMBER(member_id)
);