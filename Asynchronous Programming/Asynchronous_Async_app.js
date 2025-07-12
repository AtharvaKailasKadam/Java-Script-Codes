console.log("Asynchronous Programming using Async/Await");
// This makes use of the async/await syntax to handle asynchronous operations in a more readable way.
// Async/Await is a way to write asynchronous code that looks synchronous.
// It is built on top of Promises and allows you to write asynchronous code in a more synchronous manner.
// Async functions always return a promise.
// The await keyword can only be used inside an async function.
// It makes the code wait until the promise is resolved or rejected.
// If the promise is resolved, it returns the resolved value.
// If the promise is rejected, it throws an error.
// This is the Example of Asynchronous Programming using Async/Await.
// This is a simple example of how to use async/await in JavaScript.
function getWeather()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data Fetched Successfully.");
            resolve("Weather Data: Sunny");
        }, 3000);
    });
};

async function fetchWeather() {
    await getWeather(); // 1st Call.
    await getWeather(); // 2nd Call.
    await getWeather(); // 3rd Call.
}
// Here Ill call the fetchWeather() Function.
// This will execute the getWeather() function three times, each time waiting for the previous one
fetchWeather(); // Calling the fetchWeather() Function.

function getData(dataid)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data: ", dataid);
            resolve("Data Fetched Successfully...!");
        }, 5000);
    });
};

(async function ()
{
    await getData(1);
    await getData(2);
    await getData(3);
})(); // This is an IIFE (Immediately Invoked Function Expression) that calls the getData() function three times, each time waiting for the previous one to complete.

// Call the Function of fetchdata() in the Console Log to see the Results.