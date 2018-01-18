//sampled // http://maps.stamen.com/test/leaflet.html
var map;
 function initialize() {
     var layers = ["toner-lite"];
     for (var i = 0; i < layers.length; i++) {
         var layer = layers[i];
         map = new L.Map(layer, {
             center: new L.LatLng(27.9591535, -82.4463063),
             zoom: 5
         });
         map.addLayer(new L.StamenTileLayer(layer, {
             detectRetina: true
         }));
     }
 }
