// leaflet maps
/*var map = L.map('map').setView([-39.156833, 175.632167], 6);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/mapchica.jb2i3p5h/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var marker = L.marker([-39.156833, 175.632167]).addTo(map);

marker.bindPopup("<b>Mount Ngauruhoe</b>").openPopup();
*/

function initializeMap(lat, lon, idName, newTitle, zoomLevel) {
		var myLatlng = new google.maps.LatLng(lat, lon);

        var mapOptions = {
          center: myLatlng,
          zoom: zoomLevel,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };

        var map = new google.maps.Map(document.getElementById(idName),
            mapOptions);


		var marker = new google.maps.Marker({
    	position: myLatlng,
    	title:newTitle
		});

		marker.setMap(map);
}

initializeMap(-46.66183, 169.10496, "map-canvas-dolphinsAndPenguins", "Curio and Porpoise Bays", 12);