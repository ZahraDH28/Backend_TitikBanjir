const mongoose = require("mongoose");

const MapSchema = new mongoose.Schema({
  name: String,
  geojson: Object
});

module.exports = mongoose.model("MapData", MapSchema);
