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
var city_input = d3.select("#city").property("value");
var state_input = d3.select("#state").property("value");
var country_input = d3.select("#country").property("value")
                    .attr("name", "country-list");
var shape_input = d3.select("#shape").property("value")
                    .attr("name", "shape-list");

 
 // log input date
 console.log(datetime_input);

 //filtered data
 if (datetime_input) {
 var filteredData = data.filter(dates => dates.datetime === datetime_input); }
 if (city_input) {
 var filteredData = data.filter(cities => cities.city === city_input); }
 if (state_input) {
 var filteredData = data.filter(states => states.state === state_input); }
 if (country_input) {
//  var filteredData = data.filter(countries => countries.country === country_input); }
//  if (shape_input) {
//  var filteredData = data.filter(shapes => shapes.shape === shape_input); }


    //log filtered values
    console.log(filteredData);

    //filtered data tables
    fillTable(filteredData);
 };


// var stateDropDown = d3.select("#state").property("value")
//                     .attr("name", "state-list");
                
// var options = dropDown.selectAll("option")
//                     .data(data) // eg., data = [ {'value': 10}, {'value': 11}, {'value': 12} ]
//                     .enter()
//                     .append("option");

// options.text(function (d) { return d.value; })
//         .attr("value", function (d) { return d.value; });


// dropDown.on("change", runEnter);


//combine city, states for address param
// let address = data.map(function(location) {
//     return `${location.city}, ${location.state}`;
// });
// console.log(address)



// //api call function
// async function geocode(address) {
//     const resp = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyB3EPwOR6dbpj3ymE1TxtuOq4x-gsY8PMU`)
//     const data = await resp.json();
//     return data.results[0].geometry.location;
//   };



// let promises = [];

// for (let i = 0; i < address.length; i++) {
//     var coords = (fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${i}&key=AIzaSyB3EPwOR6dbpj3ymE1TxtuOq4x-gsY8PMU`))
//     promises.push(coords); 
// };
// var coords_each = `${coords.data.results[0].geometry.location}`;
// console.log(coords_each);
