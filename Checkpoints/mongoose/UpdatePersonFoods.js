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

// Update a person's favorite foods
async function updatePersonFoods(id, newFood) {
    try {
        const person = await Person.findById(id);
        if (!person) {
            console.log("Person not found");
            return;
        }

        person.favoriteFoods.push(newFood); // Add new food
        const updatedPerson = await person.save();
        console.log("Person updated:", updatedPerson);
    } catch (err) {
        console.error("Error updating person:", err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

updatePersonFoods("your_person_id_here", "Hamburger"); // Replace with the ID and new food
