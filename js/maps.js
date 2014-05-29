
var amphib_all = L.mapbox.tileLayer('newscientist26102012.amphib_all'),
	amphib_threat = L.mapbox.tileLayer('newscientist26102012.amphib_threat'),
	birds_all = L.mapbox.tileLayer('newscientist26102012.birds_all'),
	birds_threat = L.mapbox.tileLayer('newscientist26102012.birds_threat'),
	mammals_all = L.mapbox.tileLayer('newscientist26102012.mammals_all'),
	mammals_threat = L.mapbox.tileLayer('newscientist26102012.mammals_threat'),
	boundaries = L.mapbox.tileLayer('newscientist26102012.boundaries'),
	satellite = L.tileLayer.provider('MapQuestOpen.Aerial');
	
var map = L.map('map', {
    center: new L.LatLng(30, 0),
    zoom: 3, 
    maxZoom: 5,
    minZoom: 2,
    layers: [satellite, mammals_all, boundaries]  
});

var baseMaps = {
	"All mammals": mammals_all,
	"Threatened mammals": mammals_threat,
	"All birds": birds_all,
	"Threatened birds": birds_threat,
	"All amphibians": amphib_all,
	"Threatened amphibians": amphib_threat,	   
};


var overlayMaps = {
    "National boundaries": boundaries
};

var layersControl = new L.Control.Layers(baseMaps, overlayMaps, {collapsed: false});
map.addControl(layersControl);
map.addControl(L.mapbox.legendControl());




