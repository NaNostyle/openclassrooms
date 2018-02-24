function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(45.764047, 4.875810),
        mapTypeId: 'terrain'
    });
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c0bdb6a425101bd1aadfaa0e237c0cfffaf7f477",
        function (reponse) {
            // Transforme la réponse en tableau d'objets JavaScript
            var stations = JSON.parse(reponse);

            class Station {
                constructor(name, address, status, available_bike_stands, available_bikes, longitude, latitude, markers, marker, latLng) {
                    this.name = name;
                    this.address = address;
                    this.status = status;
                    this.available_bike_stands = available_bike_stands;
                    this.available_bikes = available_bikes;
                    this.longitude = longitude;
                    this.latitude = latitude;
                    this.markers = markers;
                    this.marker = marker;
                    this.latLng = latLng;
                }

            }

            this.markers = [];

            stations.forEach(function (station) {
                //méthode créer marker
                this.latitude = station.position.lat;
                this.longitude = station.position.lng;
                this.latLng = new google.maps.LatLng(latitude, longitude);
                var iconBase = '../images/';
                this.marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    icon: iconBase + 'bike_map_marker_225-Icon.png',
                    size: new google.maps.Size(41, 54),
                    //fin methode
                });
                new Station(station.name, station.address, station.status, station.available_bike_stands, station.available_bikes, markers, marker, latLng);

                this.markers.push(marker);

                this.marker.addListener('click', function () {
                    // méthode afficher info marker
                    $("aside").css("display", "initial");

                    $("aside p:first").text(station.name);

                    if (station.status == "OPEN") {
                        $("aside p:eq(1)").text("Ouverte");
                        $("aside p:eq(1)").css("color", "green").css("font-weight", "bold");

                    } else {
                        $("aside p:eq(1)").text("Fermée");
                        $("aside p:eq(1)").css("color", "red").css("font-weight", "bold");
                    }

                    $("aside p:eq(2)").text(station.address);
                    $("aside p:eq(3)").text(station.available_bikes);
                    $("aside p:eq(4)").text(station.available_bike_stands);
                });

                map.addListener('click', function () {
                    if ($("aside").css("display", "initial")) {
                        $("aside").css("display", "none");
                    }
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: "../images/m"
            });
        });
}






























// stations.forEach(function (station) {
//     // var lat = station.position.lat;
//     // var lng = station.position.lng;
//     // var latLng = new google.maps.LatLng(lat, lng);
//     // var marker = new google.maps.Marker({
//     //     position: latLng,
//     //     map: map
//     // });
//     // var markerCluster = new MarkerClusterer(map, marker, {
//     //     imagePath: "../images"
//     // });
//     // marker.addListener("click", function () {
//     //     $("aside").css("display", "initial");
//     // });

// })