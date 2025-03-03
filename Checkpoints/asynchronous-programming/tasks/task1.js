// tasks/task01.js
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value); // Log the current value
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);
