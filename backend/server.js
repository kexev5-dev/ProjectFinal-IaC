const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Permitir peticiones desde React (http://localhost:3000)
app.use(cors());
app.use(express.json());

// Datos de ejemplo (pueden venir de una base de datos en el futuro)
const funkos = [
  {
    id: 1,
    nombre: "Iron Man",
    precio: 29.99,
    imagen: "https://funkowallpapers.com/wp-content/uploads/ironman-funko.jpg",
  },
  {
    id: 2,
    nombre: "Batman",
    precio: 24.99,
    imagen: "https://funkowallpapers.com/wp-content/uploads/batman-funko.jpg",
  },
  {
    id: 3,
    nombre: "Baby Yoda",
    precio: 34.99,
    imagen: "https://funkowallpapers.com/wp-content/uploads/babyyoda-funko.jpg",
  },
];

// Ruta para obtener todos los Funkos
app.get("/api/funkos", (req, res) => {
  res.json(funkos);
});

// Ruta para obtener un Funko específico por ID
app.get("/api/funkos/:id", (req, res) => {
  const funko = funkos.find(f => f.id === parseInt(req.params.id));
  if (funko) {
    res.json(funko);
  } else {
    res.status(404).json({ error: "Funko no encontrado" });
  }
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});
