function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {lat: -9.1191427, lng: -77.0349046},
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false
  });  
}



  var start = document.getElementById('origen');
  var end = document.getElementById('destino');

  new google.maps.places.Autocomplete(start);
  new google.maps.places.Autocomplete(end);

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  var calcularRuta = function(directionsService,directionsDisplay){
    directionsService.route({
    origin: start.value,
    destination: end.value,
    travelMode: 'DRIVING'
    }, function (response,status){
      if (status === 'OK') {
          directionsDisplay.setDirections(response);
        }else{
      window.alert("No encontramos una ruta");
      }
    })
  };

    directionsDisplay.setMap(map);
    var trazarRuta = function(){
      calcularRuta(directionsService,directionsDisplay);
    };

    document.getElementById("ruta").addEventListener('click', trazarRuta)
  }

 
  