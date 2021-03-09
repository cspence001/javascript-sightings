# javascript-challenge

In this project, we take a dataset in the form of an array of javascript objects and within .js append a table to the html for web display. Our dataset contains a collection of key values for UFO sightings across Northern America. For each sighting, is listed within table,  date/time, city, state, country, shape, and a comment decscription. 
<br>
<br>
<b>UFO Level-1</b> Automatic Table and Date Search: In this configuration of the UFO Sighting dataset, a table is created and appended to the webpage with columns for each value field per sighting. The data can be filtered based on a date/time filter search on the page. 
<br>
<br>
<b>UFO Level-2</b> Multiple Search Categories: In this configuration of the UFO Sighting dataset, the same table is created but is filtered inclusively based on multiple search parameters of column values per sighting. These parameters can be combined for multiple fields, date/time, city, state, and country. 
<br>
<br>
<br>
<b>Files:</b> For each Level, file contents are the following: corresponding index.html for web page display using bootstrap layout, and a static folder containing folders per file element: js, css, images. The js folder contains both the node.js file configuration for with the functions to append and filter data, as well as a data.js file containing the array of javascript objects. The css contains the style elements correspondent of html elements for display. The images folder containing .jpg files of each of the two images used for display on the page.
<br>
<br>
<b><i>notes:</i></b> Within the Level-2 configuration, both the .html and app.js file contains commented code previously used to display input values as drop down elements. These drop down elements filtered the data exclusively. Further functionality will be necessary to filter the elements inclusively and is therefore a work in progress. Also included within the app.js file is an api configuration used to geocode address parameters for city, state to be later used for map configuration correspondent of selected location parameter of filtered data.  
