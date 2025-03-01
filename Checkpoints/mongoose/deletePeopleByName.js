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

// Delete people by name
async function deletePeopleByName(name) {
    try {
        const result = await Person.deleteMany({ name });
        console.log("People deleted:", result);
    } catch (err) {
        console.error("Error deleting people:", err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

deletePeopleByName("Mary"); // Replace with the name you want to delete
