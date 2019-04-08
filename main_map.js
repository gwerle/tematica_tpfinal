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
  color: "#A0522D",
  fillColor: "#FFDEAD",
  opacity: 0.7,
  fillOpacity: 0.6,
    onEachFeature: function(feicao, camada) {
      camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Sala: " + feicao.properties.COD_AMB + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
  }
})//.addTo(mapa);

var segundoandar = L.geoJSON(andar2, {
  color: "#A0522D",
  fillColor: "#CD853F",
  opacity: 0.9,
  fillOpacity: 0.9,
    onEachFeature: function(feicao, camada) {
      camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Sala: " + feicao.properties.COD_AMB + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
  }
})//.addTo(mapa);

var terceiroandar = L.geoJSON(andar3, {
  color: "#8B4513",
  fillColor: "#B8860B",
  opacity: 1,
  fillOpacity: 1,
    onEachFeature: function(feicao, camada) {
      camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Sala: " + feicao.properties.COD_AMB + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
  }
})//.addTo(mapa);

var areas_verdes = L.geoJSON(ufpr_areas_verdes, {
  color: "#94d180",
}
)//.addTo(mapa);

var arruamento = L.geoJSON(ufpr_arruamento, {
  color: "#b07f55",
})

var atletismo = L.geoJSON(ufpr_atletismo, {
  color: "#b7484b",
})

var calcada = L.geoJSON(ufpr_calcada, {
  color: "#525252",
})

var campo_quadra = L.geoJSON(ufpr_campo_quadra, {
  color: "#2f5722",
})

var construcao = L.geoJSON(ufpr_construcao, {
  color: "#cccc00",
})

var detalhes = L.geoJSON(ufpr_detalhes, {
  color: "#000000",
})

var edificacao = L.geoJSON(ufpr_edificacao, {
  color: "#cccccc",
})

var escada_rampa = L.geoJSON(ufpr_escada_rampa, {
  color: "#8a3829",
})

var estacionamento = L.geoJSON(ufpr_estacionamento, {
  color: "#e8718d",
})

var baseCartografica = {
//"OpenStreetMap": osm,
"Mapbox Streets": mapbox
}

var grupoandar1 = L.layerGroup([primeiroandar]);
var grupoandar2 = L.layerGroup([segundoandar]);
var grupoandar3 = L.layerGroup([terceiroandar]);
var ufpr_geral = L.layerGroup([areas_verdes,calcada,campo_quadra,construcao,detalhes,edificacao,escada_rampa,estacionamento,atletismo,arruamento]);

//Mapas de sobreposiçao
var informacaoTematica = {
"Mapa Geral": ufpr_geral,
"Andar 1": grupoandar1,
"Andar 2": grupoandar2,
"Andar 3": grupoandar3,
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
