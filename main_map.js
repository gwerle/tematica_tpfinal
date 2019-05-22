window.onload = function() {
    var mapa = L.map('meumapa', {
        minZoom: 18,
        maxZoom: 22,
    }).setView([-25.447400, -49.232800], 19)
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 22,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    });
    var mapbox = L.tileLayer(
        'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            minZoom: 15,
            maxZoom: 22,
            id: 'mapbox.streets',
            style: 'mapbox://styles/mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoiZ3dlcmxlIiwiYSI6ImNqdmlqM2s1NDA2OGUzem85emx2eTN3cGEifQ.1vt36xMMi_NtrfiYUFYMOA',
        }
    ).addTo(mapa);


    // primeiro andar

    var primeiroandar_banheiro = L.geoJSON(andar1_banheiro, {
            color: "#000000",
            fillColor: "#bea879",
            opacity: 0.7,
            fillOpacity: 0.6,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    var primeiroandar_ensino = L.geoJSON(andar1_ensino, {
            color: "#000000",
            fillColor: "#91522d",
            opacity: 0.7,
            fillOpacity: 0.6,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Sala: " + feicao.properties.COD_AMB + "<br/> Departamento: " + feicao.properties.DEPARTAMEN + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    var primeiroandar_salaprofessores = L.geoJSON(andar1_salaprofessores, {
            color: "#000000",
            fillColor: "#7d8b8f",
            opacity: 0.7,
            fillOpacity: 0.6,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Sala: " + feicao.properties.COD_AMB + "<br/> Departamento: " + feicao.properties.DEPARTAMEN + "<br/> Professor(a): " + feicao.properties.NOME_PROF + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE + "<br/> Professor(a): " + feicao.properties.NOME_PROF, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    var primeiroandar_resto = L.geoJSON(andar1_resto, {
            color: "#000000",
            fillColor: "#b8b1ae",
            opacity: 0.7,
            fillOpacity: 0.6,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    // segundo andar
    var segundoandar_banheiro = L.geoJSON(andar2_banheiro, {
            color: "#000000",
            fillColor: "#bea879",
            opacity: 0.9,
            fillOpacity: 0.9,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    var segundoandar_ensino = L.geoJSON(andar2_ensino, {
            color: "#000000",
            fillColor: "#91522d",
            opacity: 0.9,
            fillOpacity: 0.9,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Sala: " + feicao.properties.COD_AMB + "<br/> Departamento: " + feicao.properties.DEPARTAMEN + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    var segundoandar_salaprofessores = L.geoJSON(andar2_salaprofessores, {
            color: "#000000",
            fillColor: "#7d8b8f",
            opacity: 0.9,
            fillOpacity: 0.9,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Sala: " + feicao.properties.COD_AMB + "<br/> Departamento: " + feicao.properties.DEPARTAMEN + "<br/> Professor(a): " + feicao.properties.NOME_PROF + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE + "<br/> Professor(a): " + feicao.properties.NOME_PROF, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    var segundoandar_resto = L.geoJSON(andar2_resto, {
            color: "#000000",
            fillColor: "#b8b1ae",
            opacity: 0.9,
            fillOpacity: 0.9,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    // TERCEIRO ANDAR
    var terceiroandar_banheiro = L.geoJSON(andar3_banheiro, {
            color: "#000000",
            fillColor: "#bea879",
            opacity: 1,
            fillOpacity: 1,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    var terceiroandar_ensino = L.geoJSON(andar3_ensino, {
            color: "#000000",
            fillColor: "#91522d",
            opacity: 1,
            fillOpacity: 1,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Sala: " + feicao.properties.COD_AMB + "<br/> Departamento: " + feicao.properties.DEPARTAMEN + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    var terceiroandar_salaprofessores = L.geoJSON(andar3_salaprofessores, {
            color: "#000000",
            fillColor: "#7d8b8f",
            opacity: 1,
            fillOpacity: 1,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Sala: " + feicao.properties.COD_AMB + "<br/> Departamento: " + feicao.properties.DEPARTAMEN + "<br/> Professor(a): " + feicao.properties.NOME_PROF + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE + "<br/> Professor(a): " + feicao.properties.NOME_PROF, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    var terceiroandar_resto = L.geoJSON(andar3_resto, {
            color: "#000000",
            fillColor: "#b8b1ae",
            opacity: 1,
            fillOpacity: 1,
            weight: 0.6,
            onEachFeature: function(feicao, camada) {
                camada.bindPopup(feicao.properties.AMBIENTE + "<br/> Área: " + feicao.properties.AREA_M2 + "m²");
                camada.bindTooltip(feicao.properties.AMBIENTE, {
                    permanent: false,
                })
            }
        }) //.addTo(mapa);

    // MAPA GERAL
    var areas_verdes = L.geoJSON(ufpr_areas_verdes, {
            weight: 0.2,
            color: "#94d180",
        }) //.addTo(mapa);

    var arruamento = L.geoJSON(ufpr_arruamento, {
        weight: 0.5,
        color: "#b07f55",
    })

    var atletismo = L.geoJSON(ufpr_atletismo, {
        weight: 0.5,
        color: "#b7484b",
    })

    var calcada = L.geoJSON(ufpr_calcada, {
        weight: 0.5,
        color: "#525252",
    })

    var campo_quadra = L.geoJSON(ufpr_campo_quadra, {
        weight: 0.5,
        color: "#2f5722",
    })

    var construcao = L.geoJSON(ufpr_construcao, {
        weight: 0.5,
        color: "#cccc00",
    })

    var detalhes = L.geoJSON(ufpr_detalhes, {
        weight: 0.7,
        color: "#000000",
    })

    var edificacao = L.geoJSON(ufpr_edificacao, {
        weight: 0.8,
        color: "#969696",
    })

    var escada_rampa = L.geoJSON(ufpr_escada_rampa, {
        weight: 0.5,
        color: "#8a3829",
    })

    var estacionamento = L.geoJSON(ufpr_estacionamento, {
        weight: 0.5,
        color: "#e8718d",
    })

    var baseCartografica = {
        //"OpenStreetMap": osm,
        "Mapbox Streets": mapbox
    }

    var grupoandar1 = L.layerGroup([primeiroandar_banheiro, primeiroandar_ensino, primeiroandar_resto, primeiroandar_salaprofessores]);
    var grupoandar2 = L.layerGroup([segundoandar_banheiro, segundoandar_ensino, segundoandar_resto, segundoandar_salaprofessores]);
    var grupoandar3 = L.layerGroup([terceiroandar_banheiro, terceiroandar_ensino, terceiroandar_resto, terceiroandar_salaprofessores]);
    var ufpr_geral = L.layerGroup([areas_verdes, calcada, campo_quadra, construcao, detalhes, edificacao, escada_rampa, estacionamento, atletismo, arruamento]);
    var grupo_busca = L.layerGroup([primeiroandar_banheiro, primeiroandar_ensino, primeiroandar_resto, primeiroandar_salaprofessores, segundoandar_banheiro, segundoandar_ensino, segundoandar_resto, segundoandar_salaprofessores, terceiroandar_banheiro, terceiroandar_ensino, terceiroandar_resto, terceiroandar_salaprofessores]);
    mapa.addLayer(grupoandar1);
    mapa.addLayer(grupoandar2);
    mapa.addLayer(grupoandar3);

    //Mapas de sobreposiçao
    var informacaoTematica = {
        "Mapa Geral": ufpr_geral,
        "Andar 1": grupoandar1,
        "Andar 2": grupoandar2,
        "Andar 3": grupoandar3,
    }

    //Adicionar objetos ao controle de camadas
    L.control.layers(baseCartografica, informacaoTematica).addTo(mapa);
    L.control.scale({ position: 'bottomleft', imperial: 'false' }).addTo(mapa);

    var miniMap = new L.Control.MiniMap(osm).addTo(mapa);

    var lc = L.control.locate({
        position: 'topright',
        strings: {
            title: "Clique para atualizar sua localização!"
        }
    }).addTo(mapa);

    L.control.mousePosition().addTo(mapa);


    // MÉTODO DE BUSCA

    var searchControl = new L.Control.Search({
        layer: grupo_busca,
        propertyName: 'AMBIENTE',
        marker: false,
        moveToLocation: function(latlng, title, map) {
            var zoom = map.getBoundsZoom(latlng.layer.getBounds());
            map.setView(latlng, zoom); // access the zoom
        }
    });

    searchControl.on('search:locationfound', function(e) {

        e.layer.setStyle({ fillColor: '#3f0', color: '#0f0' });
        if (e.layer._popup)
            e.layer.openPopup();

    }).on('search:collapsed', function(e) {

        grupo_busca.eachLayer(function(layer) { //restore feature color
            grupo_busca.resetStyle(layer);
        });
    });

    mapa.addControl(searchControl); //inizialize search control
}