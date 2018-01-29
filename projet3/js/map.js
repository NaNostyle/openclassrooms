var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(45.764047, 4.875810),
    mapTypeId: 'terrain'
  });


  ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c0bdb6a425101bd1aadfaa0e237c0cfffaf7f477",
    function (reponse) {
      // Transforme la réponse en tableau d'objets JavaScript
      var stations = JSON.parse(reponse);
      // Affiche le titre de chaque film
      stations.forEach(function (station) {
        var lat = station.position.lat;
        var lng = station.position.lng;
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
        var markerCluster = new MarkerClusterer(map, marker, {
          imagePath: "../images"
        });
        marker.addListener("click", function() {
          $("body").css("color", "blue");   
          $(".container").css("grid-template-areas", "'d d d d d d d d d d d d' 'm m m m m m m m m a a a' 'f f f f f f f f f f f f'");
          $(".aside").css("backgound-color", "red");      
        });
      })     
    });   
}