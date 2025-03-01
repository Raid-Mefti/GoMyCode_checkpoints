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

// Chain search query helpers
async function chainQuery() {
    try {
        const data = await Person.find({ favoriteFoods: "Burritos" }) // Find people who like burritos
            .sort({ name: 1 }) // Sort by name (ascending)
            .limit(2) // Limit to 2 results
            .select("-age") // Hide the age field
            .exec(); // Execute the query

        console.log("People found:", data);
    } catch (err) {
        console.error("Error finding people:", err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

chainQuery();
