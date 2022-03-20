// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [34.0522, -118.2437],
    zoom: 14,
    layers: [streets]
});

<<<<<<< HEAD
// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: 'orange'
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});
=======
//  Add a marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: 'black',
    fillColor: '#ffffa1'
 }).addTo(map);
>>>>>>> 424e063dd632779b07833eb0e8c4845e5c89ddd5

// // // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
