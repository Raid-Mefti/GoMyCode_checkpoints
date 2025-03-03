// tasks/task03.js
async function awaitCall() {
    try {
        // Simulate an API call with a delay
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5; // Randomly simulate success or failure
                if (success) {
                    resolve({ data: "This is the API response" });
                } else {
                    reject(new Error("Failed to fetch data from the API"));
                }
            }, 2000); // Simulate a 2-second delay
        });

        console.log(response.data); // Log the API response
    } catch (error) {
        console.error("Error:", error.message); // Log a user-friendly error message
    }
}

// Example usage:
awaitCall();
