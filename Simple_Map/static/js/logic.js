// Create the map object with a center and zoom level.
console.log("working");
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// An array containing each city's location, state, and population.
let cityData = cities;
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circle((city.location),
    {       color: 'black',
            fillColor: 'yellow',
            fillOpacity: 0.5,
            radius: city.population/50
         }
    )
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
    .addTo(map);
});
// L.circle((city.location), {
//     color: 'black',
//     fillColor: 'yellow',
//     fillOpacity: 0.5,
//     radius: 5000
//  }).addTo(map);
// We create the tile layer that will be the background of our map.
 let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', 
{attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 50,
    accessToken: API_KEY
});

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "red"
  }).addTo(map);


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

