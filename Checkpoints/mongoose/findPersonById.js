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

// Find a person by ID
async function findPersonById(id) {
    try {
        const data = await Person.findById(id);
        console.log("Person found:", data);
    } catch (err) {
        console.error("Error finding person:", err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

findPersonById("your_person_id_here"); // Replace with the ID you want to search
