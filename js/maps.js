var amphib = L.mapbox.tileLayer('paldhous.amphib');

var satellite = L.tileLayer.provider('MapQuestOpen.Aerial');

var light = L.mapbox.tileLayer('mapbox.world-light');
	
var map = L.map('map', {
    center: new L.LatLng(30, 0),
    zoom: 3, 
    maxZoom: 7,
    minZoom: 2,
    layers: [satellite, amphib] 
});

var baseMaps = {
    "Satellite": satellite,
	"Map": light    
};

var overlayMaps = {
    "Amphibian diversity": amphib
};

var layersControl = new L.Control.Layers(baseMaps, overlayMaps, {collapsed: false});
map.addControl(layersControl);



