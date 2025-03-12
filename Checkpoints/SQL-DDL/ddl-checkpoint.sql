use gomycode;
CREATE TABLE Customer(
    customer_id VARCHAR(20) PRIMARY KEY,
    customer_name VARCHAR(20) NOT NULL,
    customer_tel INT
);
CREATE TABLE Product(
    product_id VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(20) NOT NULL,
    price INT CHECK (price > 0)
);
CREATE TABLE Orders(
    customer_id VARCHAR(20),
    product_id VARCHAR(20),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id),
    total_amount Float,
    quantity INT
);
* /
ALTER TABLE Product
ADD Category VARCHAR(20);
ALTER TABLE Orders
ADD OrderDate Datetime DEFAULT current_timestamp;