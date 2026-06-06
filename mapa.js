// 1. Estilos de ESRI
import "@arcgis/core/assets/esri/themes/light/main.css";

// 2. Módulos que necesitamos
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";

// 3. Mapa
const map = new Map({
  basemap: "streets-vector",
});

// 4. Vista
const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-78.5, -1.8], // Ecuador
  zoom: 7,
});

// 5. Widget galería de basemaps
const basemapGallery = new BasemapGallery({
  view: view,
});

// 6. Envolver en Expand (botón colapsable)
const bgExpand = new Expand({
  view: view,
  content: basemapGallery,
  expandTooltip: "Cambiar mapa base",
});

// 7. Agregar al mapa en esquina superior derecha
view.ui.add(bgExpand, "top-right");