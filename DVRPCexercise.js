var map;
function initmap() {
  map = new L.map('map');
  // Add basemap from OSM
  var osmHot = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttributes = 'Tile layers provided by <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, data supplied by the<a href="www.opendataphilly.org">City of Philadelphia.</a>'
    minZoom: 15,
    maxZoom: 19,
    attribution: osmAttributes,
    zoomControl: true
  });
  map.setView(new L.LatLng(39.9532, -75.1520), 13);
  map.addLayer(osm);
};
initmap();
