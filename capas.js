// capas.js — define y exporta las capas del visor

import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

// URL de tu API de eventos
const URL_EVENTOS = "https://siesep.seguraep.gob.ec/Lectura_Fichas/obtener_eventos.php";

export function agregarEventos(map) {
  const eventosLayer = new GeoJSONLayer({
    url: URL_EVENTOS,
    title: "Eventos",

    // Popup al hacer clic en un punto
    popupTemplate: {
      title: "Ficha: {Ficha}",
      content: [
        {
          type: "fields",
          fieldInfos: [
            { fieldName: "Agencia",  label: "Agencia"  },
            { fieldName: "Tipo",     label: "Tipo"     },
            { fieldName: "Estado",   label: "Estado"   },
            { fieldName: "Fecha",    label: "Fecha"    },
            { fieldName: "Hora",     label: "Hora"     },
          ],
        },
      ],
    },

    // Simbología: círculo azul simple
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: [0, 120, 212, 0.8],
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
        size: 10,
      },
    },
  });

  map.add(eventosLayer);
}