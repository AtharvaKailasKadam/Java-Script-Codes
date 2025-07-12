// This is the Example of Synchronous Programming in JavaScript
// i.e. The Code gets Executed in the order it is written.
// This works in the Sync or Sequential manner.
console.log("Synchronous Programming-1");
console.log("Synchronous Programming-2");
console.log("Synchronous Programming-3");


// This the Example of Asynchronous Programming.
function sayHello() {
    console.log("Hello World..!");
}
// This will execute after 2 seconds
setTimeout(sayHello, 4000);


// By Creating the Function this way.
setTimeout(() => {
    console.log("Hello World....!");
}, 4000);
console.log("Hello World.......!");

// Much Suitable for Time Consuming Codes.

// CallBacks of Synchronous Programming.
console.log("\nCallBack Functions");
function Sum(a, b) {
    console.log(a+b);
}
function Calculator(a, b, SumCallBack) {
    SumCallBack(a , b);
}
Calculator(4, 7, Sum);

// Implementing CallBacks.
function getData(dataid, getNextData)
{
    setTimeout(() =>{
        console.log("Data : ",dataid);
        if(getNextData)
        {
            getNextData();
        }
    },5000);
}

// This is the Example of CallBack Hell.
// This is not a good practice, as it makes the code hard to read and maintain.
console.log("\nCallBack Hell");
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4)
        })
    });
})
// I was Out Today too.

setTimeout(() => {
    console.log("Hii....I'm Back..!");
}, 2000);


// Inorder to avoid CallBack Hell, we can use Promises.
console.log("\nPromises Example");