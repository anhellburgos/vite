// 1. Estilos ESRI
import "@arcgis/core/assets/esri/themes/light/main.css";

// 2. Módulos
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";

// 3. Capas (definidas en capas.js)
import { agregarEventos } from "./capas.js";

// 4. Mapa
const map = new Map({
  basemap: "streets-vector",
});

// 5. Vista
const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-79.9, -2.2], // Guayaquil
  zoom: 11,
});

// 6. Agregar la capa de eventos al mapa
agregarEventos(map);

// 7. Widget: Galería de basemaps
const basemapGallery = new BasemapGallery({ view });

const bgExpand = new Expand({
  view,
  content: basemapGallery,
  expandTooltip: "Cambiar mapa base",
});

// 8. Widget: Pantalla completa
const fullscreen = new Fullscreen({
  view,
});

// 9. Agregar widgets a la vista
view.ui.add(bgExpand, "top-right");
view.ui.add(fullscreen, "top-right");