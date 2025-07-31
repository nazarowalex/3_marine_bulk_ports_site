
const map = L.map('map', {
  center: [15, 0],
  zoom: 2,
  zoomControl: true
});

// --- Base layers with English labels ---
const baseLayers = {
  "CartoDB Light (EN)": L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap & CartoDB',
    subdomains: 'abcd',
    maxZoom: 19
  }),

  "CartoDB Dark": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap & CartoDB',
    subdomains: 'abcd',
    maxZoom: 19
  }),

  "CartoDB Voyager": L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; CartoDB',
    subdomains: 'abcd',
    maxZoom: 19
  }),

  "OpenStreetMap Standard": L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  }),

  "Stamen Toner": L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
    attribution: '&copy; Stamen & OpenStreetMap',
    maxZoom: 20
  }),

  "Stamen Terrain": L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
    attribution: '&copy; Stamen & OpenStreetMap',
    maxZoom: 18
  }),

  "Stamen Watercolor": L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
    attribution: '&copy; Stamen & OpenStreetMap',
    maxZoom: 16
  }),

  "Esri WorldStreetMap": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri',
    maxZoom: 19
  }),

  "Esri WorldImagery": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri',
    maxZoom: 19
  }),

  "Esri Topographic": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri',
    maxZoom: 19
  }),

  "Esri Ocean": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri',
    maxZoom: 13
  }),

  "OpenTopoMap": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenTopoMap & OSM',
    maxZoom: 17
  }),

  "Hike & Bike": L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
    attribution: '&copy; HikeBikeMap & OSM',
    maxZoom: 18
  }),

  "OpenRailwayMap": L.tileLayer('https://tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenRailwayMap & OSM',
    maxZoom: 19
  }),

  "OpenFireMap": L.tileLayer('https://openfiremap.org/hytiles/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenFireMap & OSM',
    maxZoom: 19
  }),

  "NASAGIBS BlueMarble": L.tileLayer('https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default/2020-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg', {
    attribution: '&copy; NASA BlueMarble',
    maxZoom: 8
  }),

  "OpenMapSurfer Roads": L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenMapSurfer',
    maxZoom: 20
  }),

  "MtbMap": L.tileLayer('https://tile.mtbmap.cz/mtbmap/{z}/{x}/{y}.png', {
    attribution: '&copy; MtbMap & OSM',
    maxZoom: 18
  }),

  "BaseMap Gray": L.tileLayer('https://tiles.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '&copy; CartoDB',
    maxZoom: 19
  }),

  "Dark Gray": L.tileLayer('https://tiles.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png', {
    attribution: '&copy; CartoDB',
    maxZoom: 19
  })
};

const openSeaMap = L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenSeaMap contributors',
  maxZoom: 18,
  opacity: 0.6
});

// Default layers
baseLayers["CartoDB Light (EN)"].addTo(map);
openSeaMap.addTo(map);

// Dropdown style control
L.control.layers(baseLayers, { "OpenSeaMap Overlay": openSeaMap }, { collapsed: false }).addTo(map);

// --- (Вспомогательные функции и отображение портов остаются без изменений ниже — уже в проекте) ---
