var city = d3.select("#city")
var state = d3.select("#state")
var country = d3.select("#country")

var data = [city, state, country];

var columns = "";
for (var i = 0; i < data.length; i++) {
  columns += "data[" + i + "], ";
}


var json = {
  jsonData: [{
  one: [11, 12, 13, 14, 15]
  }, {
  two: [21, 22, 23]
  }, {
  three: [31, 32]
  }]
  };
  
  for (var i = 0; i < json.jsonData.length; i++) {
      for (var key in json.jsonData[i]) {
          for (var j = 0; j < json.jsonData[i][key].length; j++) {
              console.log(json.jsonData[i][key][j])
          }
      }
  }

  var data = [city, state];

var columns = "";
for (var i = 0; i < data.length; i++) {
  columns += "data[" + i + "], ";

  console.log(columns);
}


//need to select column value and concatenate
var city = d3.select("#city");
var cityvalue = city.property("value");

var state = d3.select("#state");
var statevalue = state.property("value");


var address = d3.merge([cityvalue],[statevalue]);

//then run through geocode to get latitude and longitutde for each
console.log(address)

//then create heatmap 



var inputArray = [
  {"firstName":"john","lastName":" doe","linkedInID":"..."},   
  {"firstName":"jane","lastName":"doe","linkedInID":"..."},
  {"firstName":"someone","lastName":"Mc Donald","linkedInID":"..."},
  ...
];

var result = inputArray.map(function(item) {
  return {
      Name: item.firstName + ' ' + item.lastName,
      linkedInID: item.linkedInID
  };
});

var address = data.map(function(item) {
  return {
    Address: item.city + ' ' + item.state,
    country: item.country
  };
});

console.log(address);



var geocoder = new google.maps.Geocoder();

geocoder.geocode({ 'address' : address}, function(results, status) {
  var c = results[0].geometry.location;
  var latitude = c.lat();
  var longitude = c.lng();        
});

console.log(c);



function getLocationForAddress(address) {
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + 
  "&key=[API KEY]"; 
  return fetch (url, {method: 'get'}).then( (httpResponse) => { 
    if (httpResponse.ok) { 	   	
      console.log("HTTP OK"); 
      return httpResponse.json(); 
    }
};

for (var x = 0; x < addresses.length; x++) {
  getLocationForAddress(addresses[i]).then(json => {
      //Do whatever you want with it: locations.push
  });
}







// function getLatLng(address) {
//     geocoder = new google.maps.Geocoder();
//     geocoder.geocode({
//       address: address},
//       function(results, status) {
//         if (status === 'OK') {
//           console.log(results[0].geometry.location);
//         } else {
//           console.log("Geocoding couldn't convert string address to lat/long points");
//         }
//     }); // end of geocoder method.
//   }

// var geocoder = new google.maps.Geocoder();
// callback = function(results, status) { return results }
// results = geocoder.geocode(address, callback)
// console.log(results);


var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}


//then run through geocode to get latitude and longitutde for each$
function GetLocation() {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          console.log(results[0].geometry.location);
        }
        else{
          console.log("Geocoding couldn't convert string address to lat/long points");
        }
  });
};

// var geocoder = new google.maps.Geocoder();
// callback = function(results, status) { return results }
// results = geocoder.geocode(address, callback)
// console.log(results);



// var city = [];
// var state = [];
// var address = [];

// data.forEach((location) => {

//     Object.entries(location).forEach(([key, value]) => {

//         if (key === "city") {
//             city.push(value);
//         }
//         {
//         if (key === "state") {
//             state.push(value);
//         }
//     });
// });
// var citiesMapped = data.map(location => location.city);
// var statesMapped = data.map(location => location.state);

// address.push(city + ", " + state)
// // console.log({city} +", " +{state});



// Object.values(data).forEach(val => console.log()){
//     console.log(`${key}: ${value}`)
// }


// function locations(data) {
// var cities = d3.select("#city");
// var city = cities.property("value");
// var states = d3.select("#state");
// var state = states.property("value");

// console.log(city, ", ", state);
// };
// locations(data);

// concatenate city, state, country
// var address = data.map(function(item) {
//     return {
//       Address: item.city + ', ' + item.state,
//     //   country: item.country
//     };
//   });
  
// console.log(address);


//     for (var i = 0; i < tableData.city; i++) {
//         var city =data.city[i];
//     for (var j = 0; j < tableData.state; j++) {
//         var state =data.state[j];
//         };
//     };
//     console.log({city},", ",{state});





// const request = new XMLHttpRequest();
// request.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+Views,+CA&key=AIzaSyB3EPwOR6dbpj3ymE1TxtuOq4x-gsY8PMU&callback=initMap");
// request.send();
// request.onload = ()=>{
//     console.log(request);
//     if (request.status ===200) {
//         console.log(request.response);
//             }
//       else {
//         console.log(`error ${request.status}`)
//     }
// };


// const request = new XMLHttpRequest();
// const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyB3EPwOR6dbpj3ymE1TxtuOq4x-gsY8PMU';

// request.open('GET', url);
// request.send();


// geocoder = new google.maps.Geocoder();
// geocoder.geocode({ 'address': address }, function(results, status) {
//   if (status == google.maps.GeocoderStatus.OK) {
//     map.setCenter(results[0].geometry.location);
//     var marker = new google.maps.Marker({
//       map: map,
//       position: results[0].geometry.location
//     });
//   }
// });
//AIzaSyB3EPwOR6dbpj3ymE1TxtuOq4x-gsY8PMU

// var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyB3EPwOR6dbpj3ymE1TxtuOq4x-gsY8PMU';
// var request = new XMLHttpRequest();
// geocode = request.open('GET', url);
// console.log(geocode);

// geocode.onload = function(results) {
//     var geoData = JSON.parse(geocode.responseText); // parse the JSON from geocode response
//     var results = geoData["results"]; // create variable for results

//     var lat = results[0]["geometry"]["location"]["lat"]; // parse the latitude
//     var lng = results[0]["geometry"]["location"]["lng"]; // parse the longitude
//     console.log(userLong);
//     console.log(userLat);
// }
// geocode.send();

// //


// var dropDown = d3.select("tbody").append("select")
//                     .attr("name", "shape-list");
                
// var options = dropDown.selectAll("option")
//                     .data(data) // eg., data = [ {'value': 10}, {'value': 11}, {'value': 12} ]
//                     .enter()
//                     .append("option");

// options.text(function (d) { return d.value; })
//         .attr("value", function (d) { return d.value; });


// dropDown.on("change", data.filter(d => d.value === shape_input);