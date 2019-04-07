window.onload = function() {
  var mapa = L.map('meumapa', {
    minZoom: 15,
    maxZoom: 22,
  }).setView([-25.447859,-49.232748], 18)
  var osm = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 22,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
  });
  var mapbox = L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
      minZoom: 15,
      maxZoom: 22,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoic2NhbWJvaW0iLCJhIjoiY2pmMnJiYXduMWZlaTMzb2h0OHZnb2p5MyJ9.KS6DEMGACVV6xK7-XqxTeA',
    }
  ).addTo(mapa);

//L.geoJSON(andar1).addTo(mapa).bindPopup(andar1.properties.EDIFICIO)
var primeiroandar = L.geoJSON(andar1, {
    onEachFeature: function(feicao, camada) {
      camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
  }
})//.addTo(mapa);

    var baseCartografica = {
    //"OpenStreetMap": osm,
    "Mapbox Streets": mapbox

    }
var grupoandar1 = L.layerGroup([primeiroandar]);

//Mapas de sobreposiçao
var informacaoTematica = {
"Andar 1": grupoandar1,
//"Andar2": grupoandar2
}

//Adicionar objetos ao controle de camadas
L.control.layers(baseCartografica, informacaoTematica).addTo(mapa);
L.control.scale({position: 'bottomleft', imperial: 'false'}).addTo(mapa);

var miniMap = new L.Control.MiniMap(osm).addTo(mapa);

mapa.locate({
  setView: true,
  maxZoom: 22,
  timeout: 100000
  });

  mapa.on('locationfound', function(evento) {
    L.marker(evento. latlng).addTo(mapa);  L.circle(evento.latlng, evento.accuracy / 2).addTo(mapa);
  });

L.control.mousePosition().addTo(mapa);


}
