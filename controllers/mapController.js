const fs = require("fs");
const path = require("path");

exports.getGeoJSON = (req, res) => {
  const filePath = path.join(__dirname, "../public/map.geojson");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error membaca file GeoJSON" });
    }

    let geojson = JSON.parse(data);

    // Perbaikan otomatis jika point terbalik (GeoJSON = [lng, lat])
    geojson.features = geojson.features.map(f => {
      if (f.geometry.type === "Point") {
        const [lng, lat] = f.geometry.coordinates;
        f.geometry.coordinates = [lng, lat];
      }
      return f;
    });

    res.json(geojson);
  });
};
