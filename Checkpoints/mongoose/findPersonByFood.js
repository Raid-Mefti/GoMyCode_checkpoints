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

// Find a person by favorite food
async function findPersonByFood(food) {
    try {
        const data = await Person.findOne({ favoriteFoods: food });
        console.log("Person found:", data);
    } catch (err) {
        console.error("Error finding person:", err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

findPersonByFood("Pizza"); // Replace with the food you want to search
