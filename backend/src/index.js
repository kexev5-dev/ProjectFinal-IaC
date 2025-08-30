const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = 5000;

// Configuración DB con variables de entorno de docker-compose
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "mydb",
};

app.get("/", (req, res) => {
  res.send("🚀 Backend Node.js corriendo correctamente!");
});

app.get("/db-check", async (req, res) => {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.query("SELECT NOW() AS now");
    res.json({ status: "ok", time: rows[0].now });
    await conn.end();
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend escuchando en puerto ${PORT}`);
});
