const express = require("express");
const cors = require("cors");
const mapRoutes = require("./routes/mapRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Route GeoJSON
app.use("/api/map", mapRoutes);

// Jalankan server
const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
