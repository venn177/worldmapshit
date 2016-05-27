var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 1,
  zoomSnap: 0.0001,
  doubleClickZoom: false,
  wheelPxPerZoomLevel: 200,
  wheelDebounceTime: 10
});
var bounds = [[0,0], [3500,6000]];
var image = L.imageOverlay('https://dl.dropboxusercontent.com/u/5617656/Atlium%20Compendium/Map-Related/leaflet-map/map.png', bounds).addTo(map);
map.fitBounds(bounds);

// Loading the CSS for the child pages of the iframe without having to embed it into the child page itself


//MARKERS ARE GOING HERE

var brightfall = L.circle([2217,2690], 40, {
  color: "red",
  opacity: 0, fillOpacity: 0
}).addTo(map).on('click', onClick);

function onClick(brightfall) {
  document.getElementById('modal-content').src = 'brightfall.html';
  modalLoad();
}



// Other shit go hurr

function modalLoad() {
  $("#myModal").modal();
}
