
const map = L.map('map').setView([15, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);

L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenSeaMap contributors',
  maxZoom: 18,
  opacity: 0.6
}).addTo(map);

fetch('js/data/ports_detailed.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(port => {
      const marker = L.circleMarker([port.lat, port.lon], {
        radius: 4,
        fillColor: "#33aaff",
        color: "#33aaff",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(map);

      const popup = `
        <div style="min-width:220px;">
          <h4>${port.name}</h4>
          <p><strong>Country:</strong> ${port.country}<br>
          <strong>UN/LOCODE:</strong> ${port.unlocode}<br>
          <strong>Use:</strong> ${port.harbor_use}</p>
          <hr style="margin:6px 0">
          <div class="popup-section"><strong>Port Info</strong><div class="popup-detail">${port.name} — ${port.country}</div></div>
          <div class="popup-section"><strong>Agent</strong><div class="popup-detail">${port.agent}</div></div>
          <div class="popup-section"><strong>UWI</strong><div class="popup-detail">${port.uwi}</div></div>
          <div class="popup-section"><strong>Supplier</strong><div class="popup-detail">${port.supplier}</div></div>
          <div class="popup-section"><strong>Workshop</strong><div class="popup-detail">${port.workshop}</div></div>
        </div>
      `;
      marker.bindPopup(popup);
    });
  });
