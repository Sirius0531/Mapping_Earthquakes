
// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([30, 30], 2);
// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/Sirius0531/Mapping_Earthquakes/main/torontoNeighborhoods.json";
// Add GeoJSON data.

// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};
// Grabbing our GeoJSON data.
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.name + "</h2>"+
//       "<h3>" + feature.properties.city + ", "+feature.properties.country+"</h3>" );
//     }

//   }).addTo(map);

//   L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup("<h2>" + feature.properties.faa + "</h2>");
//      }
//     }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', 
{attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 50,
    accessToken: API_KEY
});
// streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// dark.addTo(map);

let baseMaps = {
    "Streets": streets,
    "Dark": dark
  };

  // Create the map object with center, zoom level and default layer.
  let map = L.map('mapid', {
    center: [43.75, -79.5],
    zoom: 11,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

 
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);

    // Create a style for the lines.
// let myStyle = {
//   color: "#ffffa1",
//   weight: 2
// }
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    // style:myStyle,
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2> Airport Code: " + feature.properties.airline + "</h2>"+
      "<h3> Airport Name: " + feature.properties.airline_id + "</h3>" );}
     }).addTo(map);
});
