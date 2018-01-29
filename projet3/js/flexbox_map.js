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
                var latitude = station.position.lat;
                var longitude = station.position.lng;
                var LatLng = new google.maps.LatLng(latitude, longitude);
                var iconBase = '../images/';
                var marker = new google.maps.Marker({
                    position: LatLng,
                    map: map,
                    icon: iconBase + 'bike_map_marker_225-Icon.png',
                    size: new google.maps.Size(41, 54),
                });
                var infosStation = new Station(station.name, station.address, station.status, station.available_bike_stands, station.available_bikes);

                markers.push(marker);

                marker.addListener('click', function () {
                    $("aside").html("")
                    $("aside").append("<h3>Nom de la station : </h3>");
                    $("aside").append("<h3>Statut de la station : </h3>");
                    $("aside").append("<h3>Adresse de la station : </h3>");
                    $("aside").append("<h3>Nombre de vélos disponibles : </h3>");
                    $("aside").append("<h3>Places de vélos disponibles : </h3>");
                    $("aside").css("display", "initial");

                    $("aside h3:first").after("<p>" + infosStation.name + "</p>");
 
                    if (infosStation.status == "OPEN") {
                        $("aside h3:eq(1)").after("<p>Ouverte</p>");
                        $("aside p:eq(1)").css("color", "green").css("font-weight", "bold");

                    } else {
                        $("aside h3:eq(1)").after("<p>Fermée</p>");
                    }

                    $("aside h3:eq(2)").after("<p>" + infosStation.address + "</p>");
                    $("aside h3:eq(3)").after("<p>" + infosStation.available_bikes + "</p>");
                    $("aside h3:eq(4)").after("<p>" + infosStation.available_bike_stands + "</p>");

                    $("aside").append("<canvas><p>Désolé, votre navigateur ne supporte pas Canvas. Mettez-vous à jour</p></canvas>");
                    $("aside canvas").attr("id", "canvas");
                    $("#canvas").css("width", "200px").css("background-color", "red").css("height", "30%");
                    var canvas = document.querySelector("#canvas");
                    var context = canvas.getContext('2d');
                    context.fillStyle = "gold";
                    context.fillRect(0, 0, 50, 80);
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