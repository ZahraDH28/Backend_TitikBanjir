const express = require("express");
const router = express.Router();
const { getGeoJSON } = require("../controllers/mapController");

router.get("/geojson", getGeoJSON);

module.exports = router;
