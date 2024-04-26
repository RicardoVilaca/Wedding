// Maps for the event
$(document).ready(function () {

		//Open street  Map
		var coord = [41.1515632,-8.5933378]; // <--- coordinates here

		var map = L.map('map-canvas', { scrollWheelZoom:false}).setView(coord, 19);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 22,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: ''
		}).addTo(map);

		// custom icon
		var customIcon = L.icon({
		iconUrl: 'static/img/mapmarker.png',
		iconSize:     [64, 64], // size of the icon
		iconAnchor:   [32, 63] // point of the icon which will correspond to marker's location
		});

		// marker object, pass custom icon as option, add to map         
		var marker = L.marker(coord, {icon: customIcon}).addTo(map);
});

// Google maps for the housing
$(document).ready(function () {
	// Quinta do Passal
	var coord = [41.3279258, -8.3439921]; // <--- coordinates here

	var map = L.map('map-canvas-housing1', { scrollWheelZoom:false}).setView(coord, 17);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 22,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	// Hotel de Charme Quinta do Pinheiro
	var coord = [41.2982856, -8.3403946]; // <--- coordinates here

	var map = L.map('map-canvas-housing2', { scrollWheelZoom:false}).setView(coord, 16);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 22,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	// Paços Ferrara Hotel
	var coord = [41.2770649, -8.3747779]; // <--- coordinates here

	var map = L.map('map-canvas-housing3', { scrollWheelZoom:false}).setView(coord, 17);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 22,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
});