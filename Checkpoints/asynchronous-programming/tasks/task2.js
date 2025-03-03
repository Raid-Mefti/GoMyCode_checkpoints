// tasks/task02.js
async function awaitCall() {
    // Simulate an API call with a delay
    const response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "This is the API response" });
        }, 2000); // Simulate a 2-second delay
    });

    console.log(response.data); // Log the API response
}

// Example usage:
awaitCall();
