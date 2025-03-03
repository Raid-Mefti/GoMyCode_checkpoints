// tasks/task04.js
async function firstFunction() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    console.log("First function executed");
}

async function secondFunction() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    console.log("Second function executed");
}

async function thirdFunction() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    console.log("Third function executed");
}

async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
}

// Example usage:
chainedAsyncFunctions();
