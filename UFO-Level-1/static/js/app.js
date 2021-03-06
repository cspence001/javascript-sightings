// from data.js
var tableData = data;

var tbody = d3.select("#ufo-table");


//fill table
fillTable(data);

//append table
function fillTable(data) {
    tbody.html("");
    data.forEach((UFOsights) => {
        var row = tbody.append("tr");
        Object.entries(UFOsights).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    })
}

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

 // select the input element and get the raw html node // select the value property of the input element
 var datetime_input = d3.select("#datetime").property("value");

 
 // log input date
 console.log(datetime_input);
 
 //filtered data
 if (datetime_input) {
 var filteredData = data.filter(dates => dates.datetime === datetime_input); }

    //log filtered values
    console.log(filteredData);

    //filtered data tables
    fillTable(filteredData);
};


  

