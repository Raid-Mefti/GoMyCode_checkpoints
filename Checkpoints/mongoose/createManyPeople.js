const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // Increase timeout
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define the Person model
const Person = require("./models/Person");

// Create many people
async function createManyPeople() {
    const arrayOfPeople = [
        { name: "Alice", age: 30, favoriteFoods: ["Sushi", "Pasta"] },
        { name: "Bob", age: 22, favoriteFoods: ["Burger", "Fries"] },
        { name: "Charlie", age: 28, favoriteFoods: ["Pizza", "Ice Cream"] },
    ];

    try {
        const data = await Person.create(arrayOfPeople);
        console.log("People created:", data);
    } catch (err) {
        console.error("Error creating people:", err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

createManyPeople();
