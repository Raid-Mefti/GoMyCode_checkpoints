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

// Delete a person by ID
async function deletePersonById(id) {
    try {
        const deletedPerson = await Person.findByIdAndRemove(id);
        console.log("Person deleted:", deletedPerson);
    } catch (err) {
        console.error("Error deleting person:", err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

deletePersonById("your_person_id_here"); // Replace with the ID you want to delete
