
const map = L.map('map').setView([15, 0], 2);

// Base map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);

// Overlay: OpenSeaMap
L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenSeaMap contributors',
  maxZoom: 18,
  opacity: 0.6
}).addTo(map);

// Load bulk ports
fetch('js/data/ports_bulk.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      pointToLayer: (feature, latlng) =>
        L.marker(latlng).bindPopup(
          `<b>${feature.properties.name}</b><br>${feature.properties.country}<br>${feature.properties.harbor_use}`
        )
    }).addTo(map);
  });
