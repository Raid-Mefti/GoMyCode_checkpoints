// tasks/task05.js
const fetch = require("node-fetch"); // Install node-fetch if needed

async function concurrentRequests() {
    try {
        // Simulate two API calls
        const [response1, response2] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
                res.json()
            ),
            fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
                res.json()
            ),
        ]);

        console.log("Response 1:", response1);
        console.log("Response 2:", response2);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Example usage:
concurrentRequests();
