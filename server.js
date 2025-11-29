const express = require("express");
const cors = require("cors");
const mapRoutes = require("./routes/mapRoutes");

const app = express();
const corsOptions = {
  origin: [
    "https://zahradh28.github.io/Frontend_TitikBanjir/",
    "https://vercel.com/zahradh28s-projects/frontend-titik-banjir",
    "http://localhost:3000"
  ],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// Route GeoJSON
app.use("/api/map", mapRoutes);

// Jalankan server
const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
