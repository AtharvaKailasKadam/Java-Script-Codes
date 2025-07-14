const URL = "https://meowfacts.herokuapp.com/";
let para = document.getElementById("Para"); // This is the paragraph element where we will display the data fetched from the API.
const btn = document.getElementById("btn"); // This is the button element that will trigger the API call when clicked.

// Fetching data from the API
// Fetch returns a promise
const getfacts = async () =>
{
    console.log("Fetching Data from the API...");
    let response = await fetch(URL);
    console.log(response); // This is the JSON Response.
    let data = await response.json();
    console.log(data.data); // This is the JSON Data.
    para.innerText = data.data; // Displaying the data in the paragraph element.
    console.log("Data Fetched Successfully.");
}

btn.addEventListener("click" , () => {
    getfacts(); // Calling the getfacts function when the button is clicked.
    console.log("Button Clicked. Fetching Data...");
});

// Can also be Done with Promise Chaining.

function getfactsWithPromise()
{
    fetch(URL)
    .then((response) => {
        console.log("Fetching Data from the API...");
        return response.json();
    }) // Convert the response to JSON
        .then((data) => {
            console.log(data.data);
            para.innerText = data.data;
            console.log("Data Fetched Successfully.");
    }) // Convert the response to JSON
}
// But this Function is Not Called Anywhere.
// You can call this function to see the results in the console log.