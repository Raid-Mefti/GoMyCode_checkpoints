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

// Find people by name
async function findPeopleByName(name) {
    try {
        const data = await Person.find({ name });
        console.log("People found:", data);
    } catch (err) {
        console.error("Error finding people:", err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

findPeopleByName("Alice"); // Replace with the name you want to search
