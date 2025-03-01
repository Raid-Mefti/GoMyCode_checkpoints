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

// Update a person's age
async function updatePersonAge(name, newAge) {
    try {
        const updatedPerson = await Person.findOneAndUpdate(
            { name }, // Search criteria
            { age: newAge }, // Update
            { new: true } // Return the updated document
        );
        console.log("Person updated:", updatedPerson);
    } catch (err) {
        console.error("Error updating person:", err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

updatePersonAge("Alice", 20); // Replace with the name and new age
