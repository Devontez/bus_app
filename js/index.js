
var map;
var markers = [];
var infoWindow;
function initMap() {
    var SaintGeorge = {
        lat: 12.104818,
        lng: -61.670761
    }
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: SaintGeorge,
        zoom: 12
    });

    infoWindow = new google.maps.InfoWindow();
    
    createMarker();
    populateInforWindow();
    initMap();

    var input = document.getElementById('destination');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));


      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}



function createMarker() {
  
    for(let i = 0; i < restaurants.length; i++) {
        let marker = new google.maps.Marker({position: restaurants[i].location, map: map, animation: google.maps.Animation.DROP, title:restaurants[i].title});
        infoWindow = new google.maps.InfoWindow({});
        marker.addListener('click', function(){
          populateInforWindow(marker, infoWindow );
          infoWindow.open(map, marker);
        } )
    }
    }
  
    function populateInforWindow(marker, info){
      if(info.markers != marker){
        info.setContent('');
        info.setContent(marker.title);
        
      }


    }



    const restaurants = [{
        title: "Grenville",
        location: {
          lat: 12.120954,
          lng: -61.623401
        }
      },
      {
        title: "St Gorges",
        location: {
          lat: 12.052773,
          lng: -61.754754
        }
      },
      {
        title: "Grand Ance",
        location: {
          lat: 12.010601,
          lng: -61.765064
        }
      },
      {
        title: "Sauteurs",
        location: {
          lat: 12.224812, 
          lng: -61.640725
        }
      },
      {
        title: "Gouyave",
        location: {
          lat: 12.164971, 
          lng: -61.730937
        }
      }
    ]
  