let map = L.map('map').setView([46.15963, -1.15128], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

data.forEach((markers) => {
    let marker = L.marker([markers.fields.geojson.coordinates[1], markers.fields.geojson.coordinates[0]]).addTo(map);
    marker.bindPopup(markers.fields.nom_long + "\n" + markers.fields.geojson.coordinates[0] + "\n" + markers.fields.geojson.coordinates[1]);
});
