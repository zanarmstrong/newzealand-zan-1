
// leaflet maps
/*var map = L.map('map').setView([-39.156833, 175.632167], 6);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/mapchica.jb2i3p5h/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var marker = L.marker([-39.156833, 175.632167]).addTo(map);

marker.bindPopup("<b>Mount Ngauruhoe</b>").openPopup();
*/

// Google Maps
var myLatlng = new google.maps.LatLng(-39.156833, 175.632167);

function initialize() {
	console.log('here');
        var mapOptions = {
          center: myLatlng,
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);


		var marker = new google.maps.Marker({
    	position: myLatlng,
    	title:"Mt. Doom!"
		});

		marker.setMap(map);
}

initialize()
