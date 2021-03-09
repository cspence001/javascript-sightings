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
// button.on("click", runEnter);
// form.on("submit", runEnter);

d3.selectAll("input").on("change", updateFilters);

var filters = {};

function updateFilters() {

    let changedElement = d3.select(this);
    let elementValue = changedElement.property("value");
    let filterId = changedElement.attr("id");

    if(elementValue) {
        filters[filterId] = elementValue
    } else {
        delete filters[filterId]
    }

    filterData();
}

function filterData() {
    let filteredData = tableData;
    Object.entries(filters).forEach(([k, v]) => {
        filteredData = filteredData.filter(row => row[k] === v)
    });
    fillTable(filteredData);
}


// //combine city, states for address param
// let address = data.map(function(location) {
//     return `${location.city}, ${location.state}`;
// });
// // console.log(address)

// let promises = [];

// for (let i = 0; i < address.length; i++) {
//     var coords = (fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${i}&key=AIzaSyB3EPwOR6dbpj3ymE1TxtuOq4x-gsY8PMU`))
//     promises.push(coords); 
// };
// var coords_each = `${coords.data.results[0].geometry.location}`;
// console.log(coords_each);