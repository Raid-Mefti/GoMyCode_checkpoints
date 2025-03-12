INSERT INTO Product (product_id, product_name, Category, price)
VALUES (
        "PO1",
        "Samsung Galaxy S20",
        "Smartphone",
        3299
    ),
    ("PO2", "ASUS Notebook", "PC", 4599);
INSERT INTO Customer (customer_id, customer_name, customer_tel)
VALUES ("CO1", "ALI", 71321009),
    ("CO2", "ASMA", 77345823);
INSERT INTO Orders (
        customer_id,
        product_id,
        quantity,
        total_amount
    )
VALUES (
        "CO1",
        "PO1",
        2,
        9198
    ),
    (
        "CO2",
        "PO2",
        1,
        3299
    )