
function myMap() {
  var mapProp= {
    center: new google.maps.LatLng(45.822586, 20.454559),
    zoom:18,
    scrollwheel: false
  };
var map= new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
