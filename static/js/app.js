// from data.js
var tableData = data;

var tbody = d3.select("#ufo-table");


// YOUR CODE HERE!

//append table
data.forEach((UFOsights) => {
    var row = tbody.append("tr");
    Object.entries(UFOsights).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});



// create event handler and filter for input
// select button
var button = d3.select("#filter-btn");

//select form
var form = d3.select("#form");

//create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// complete event handler function for the form
function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw html node
    var inputElement = d3.select("#datetime");

    // select the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(data);

    var filteredData = data.filter(dates => dates.datetime === inputValue);

    console.log(filteredData);

    // filteredData.forEach((UFOsights) => {
    // var row = tbody.append("tr");
    // Object.entries(UFOsights).forEach(([key, value]) => {
    //     var cell = tbody.append("td");
    //     cell.text(value);
    
        // });
    // });
};


