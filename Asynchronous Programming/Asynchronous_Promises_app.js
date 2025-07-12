let Prom = new Promise((resolve, reject) =>
{
    console.log("I am a Promise");
    resolve("Promise Resolved Successfully..!");
    // reject("Promise Rejected..!");
});

console.log(Prom);

// This is the Promise Object.
// It is a placeholder for a value that will be available in the future.
// It is used to handle asynchronous operations in JavaScript.
// It can be in one of the three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

function getData(DataId, getNextData)
{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Data: ", DataId);
            resolve("Data Fetched Successfully...!");
            if(getNextData)
            {
                getNextData();
            }
            else
            {
                reject("No More Data Available...!");
            }
        }, 5000);
    })
}

// Now how to Use the Promise Object.
console.log("\nUsing Promises");

const getPromiseData = () => {
    return new Promise((resolve, reject) =>
    {
        console.log("I am a Promise");
        resolve("Promise Resolved Successfully..!");
        // reject("Promise Rejected..!");
    });
}
// This is the Then Block.
// It is used to handle the success of the promise.
let promisedata = getPromiseData();
promisedata.then((res) => {
    console.log("Promise Resolved Successfully...!");
});
// This is the Catch Block.
// It is used to handle the error if the promise is rejected.
promisedata.catch((err) => {
    console.log("Promise Rejected...!");
});
