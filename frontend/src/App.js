import React, { useEffect, useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState("Cargando...");
  const [dbStatus, setDbStatus] = useState("Cargando...");

  useEffect(() => {
    // URL viene de docker-compose → REACT_APP_API_URL=http://backend:5000
    fetch(`${process.env.REACT_APP_API_URL}/`)
      .then(res => res.text())
      .then(data => setBackendMessage(data))
      .catch(err => setBackendMessage("Error: " + err.message));

    fetch(`${process.env.REACT_APP_API_URL}/db-check`)
      .then(res => res.json())
      .then(data => setDbStatus(JSON.stringify(data)))
      .catch(err => setDbStatus("Error: " + err.message));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🚀 Frontend React</h1>
      <h2>Mensaje desde el Backend:</h2>
      <p>{backendMessage}</p>
      <h2>Estado de la Base de Datos:</h2>
      <p>{dbStatus}</p>
    </div>
  );
}

export default App;