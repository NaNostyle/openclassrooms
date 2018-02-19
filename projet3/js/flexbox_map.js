// var map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 13,
//         center: new google.maps.LatLng(45.764047, 4.875810),
//         mapTypeId: 'terrain'
//     });
//     var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c0bdb6a425101bd1aadfaa0e237c0cfffaf7f477",
//         function (reponse) {
//             // Transforme la réponse en tableau d'objets JavaScript
//             var stations = JSON.parse(reponse);
//             class Station {
//                 constructor(latitude, longitude) {
//                     this.latitude = latitude;
//                     this.longitude = longitude;
//                 }
//             }
//             stations.forEach(function (station) {
//                 this.latitude = station.position.lat;
//                 this.longitude = station.position.lng;
//                 var LatLng = new google.maps.LatLng(this.latitude, this.longitude);
//                 console.log(LatLng)
//                 var locations = [LatLng]
//                 console.log(locations)
//                 var markers = locations.map(function (location, i) {
//                     return new google.maps.Marker({
//                         position: location,
//                         label: labels[i % labels.length],
//                         map: map
//                     });
//                 });
//                 var markerCluster = new MarkerClusterer(map, markers, {
//                     imagePath: "../images/m"
//                 });

//             })
//         });
// }

var map;

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
                constructor(name, address, status, available_bike_stands, available_bikes, longitude, latitude) {
                    this.latitude = latitude;
                    this.longitude = longitude;
                    this.name = name;
                    this.address = address;
                    this.status = status;
                    this.available_bike_stands = available_bike_stands;
                    this.available_bikes = available_bikes;
                }

            }

            var markers = [];

            stations.forEach(function (station) {
                //méthode créer marker
                var latitude = station.position.lat;
                var longitude = station.position.lng;
                var LatLng = new google.maps.LatLng(latitude, longitude);
                var iconBase = '../images/';
                var marker = new google.maps.Marker({
                    position: LatLng,
                    map: map,
                    icon: iconBase + 'bike_map_marker_225-Icon.png',
                    size: new google.maps.Size(41, 54),
                    //fin methode
                });
                var infosStation = new Station(station.name, station.address, station.status, station.available_bike_stands, station.available_bikes);

                markers.push(marker);

                marker.addListener('click', function () {
                    // méthode afficher info marker
                    $("aside").css("display", "initial");

                    $("aside p:first").text(infosStation.name);

                    if (infosStation.status == "OPEN") {
                        $("aside p:eq(1)").text("Ouverte");
                        $("aside p:eq(1)").css("color", "green").css("font-weight", "bold");

                    } else {
                        $("aside p:eq(1)").text("Fermée");
                        $("aside p:eq(1)").css("color", "red").css("font-weight", "bold");
                    }

                    $("aside p:eq(2)").text(infosStation.address);
                    $("aside p:eq(3)").text(infosStation.available_bikes);
                    $("aside p:eq(4)").text(infosStation.available_bike_stands);

                    // $("aside").append("<canvas><p>Désolé, votre navigateur ne supporte pas Canvas. Mettez-vous à jour</p></canvas>");
                    // $("aside canvas").attr("id", "canvas");
                    // $("#canvas").css("width", "200px").css("height", "30%").css("background-color", "blue");
                    // var canvas = document.querySelector("#canvas");
                    // var context = canvas.getContext('2d');
                    // context.fillStyle = "gold";
                    // context.fillRect(0, 0, 50, 80);

                    ///début tuto canvas


                    ///fin tuto canvas
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


        })
}
// this.name = station.name;
// this.address = station.address;
// this.status = station.status;
// this.available_bike_stands = station.available_bike_stands;
// this.available_bikes = station.available_bikes;
// var stationsTable = [new Station(this.latitude, this.longitude, this.name, this.address, this.status, this.available_bike_stands, this.available_bikes)]








// var marker = new google.maps.Marker({
//     position: latLng,
//     map: map

// });





























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