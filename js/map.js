
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

// Modal functions
function showModal(title, content) {
  document.getElementById('modal-title').innerHTML = title;
  document.getElementById('modal-content').innerHTML = content;
  document.getElementById('modal-overlay').style.display = 'block';
  document.getElementById('modal-window').style.display = 'block';
}
function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
  document.getElementById('modal-window').style.display = 'none';
}

// Escape HTML content
function escapeHtml(text) {
  return text.replace(/`/g, '\`');
}

function createExpandableSection(title, content) {
  const safeContent = escapeHtml(content);
  return `
    <div class="popup-section" style="margin-bottom:6px;">
      <a href="javascript:void(0);" onclick="showModal('${title}', \`${safeContent}\`)" style="text-decoration:underline;color:#0077cc;">
        <strong>${title}</strong>
      </a>
    </div>
  `;
}

// Load ports
fetch('js/data/ports_detailed.json')
  .then(res => res.json())
  .then(data => {
    data.forEach((port, index) => {
      const marker = L.circleMarker([port.lat, port.lon], {
        radius: 4,
        fillColor: "#33aaff",
        color: "#33aaff",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(map);

      // Tooltip (on hover)
      marker.bindTooltip(port.name, {
        permanent: false,
        direction: 'top',
        offset: [0, -6],
        className: 'port-tooltip'
      });

      const popup = `
        <div style="min-width:220px;">
          <h4>${port.name}</h4>
          <p><strong>Country:</strong> ${port.country}<br>
          <strong>UN/LOCODE:</strong> ${port.unlocode}<br>
          <strong>Use:</strong> ${port.harbor_use}</p>
          <hr style="margin:6px 0">
          ${createExpandableSection('Port Info', port.port_info)}
          ${createExpandableSection('Agent', port.agent)}
          ${createExpandableSection('UWI', port.uwi)}
          ${createExpandableSection('Supplier', port.supplier)}
          ${createExpandableSection('Workshop', port.workshop)}
        </div>
      `;
      marker.bindPopup(popup);
    });
  });
