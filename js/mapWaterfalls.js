// leaflet maps
/*var map = L.map('map').setView([-39.156833, 175.632167], 6);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/mapchica.jb2i3p5h/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var marker = L.marker([-39.156833, 175.632167]).addTo(map);

marker.bindPopup("<b>Mount Ngauruhoe</b>").openPopup();
*/

function initializeMap(locations, idName, newTitle, zoomLevel) {
    console.log(locations)
		var myLatlng = new google.maps.LatLng(locations[0][1], locations[0][2]);

        var mapOptions = {
          center: myLatlng,
          zoom: zoomLevel,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };

        var map = new google.maps.Map(document.getElementById(idName),
            mapOptions);


    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        title: locations[i][0]
      })
    }

}

var locations = [
      ['Spa Park Taupo', -38.672886, 176.0873629],
      ['Milford Sound', -44.67162, 167.92562]
    ];

initializeMap(locations, "map-canvas-waterfalls", "Waterfalls", 4);


