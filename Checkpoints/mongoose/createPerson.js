const Person = require("./models/Person");

async function createPerson() {
    const person = new Person({
        name: "John Doe",
        age: 25,
        favoriteFoods: ["Pizza", "Burger"],
    });

    try {
        const data = await person.save(); // Save the document
        console.log("Person saved:", data);
    } catch (err) {
        console.error("Error saving person:", err);
    }
}

createPerson(); // Call the async function
