// tasks/task06.js
const fetch = require("node-fetch"); // Install node-fetch if needed

async function parallelCalls(urls) {
    try {
        // Fetch data from all URLs concurrently
        const responses = await Promise.all(
            urls.map((url) => fetch(url).then((res) => res.json()))
        );

        console.log("Responses:", responses);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Example usage:
parallelCalls([
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
]);
