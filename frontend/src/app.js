// src/App.js
import React from "react";
import funkos from "./data/funkosdata";
import FunkoCard from "./components/funkoscard"

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Catálogo de Funkos</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {funkos.map(f => (
          <FunkoCard key={f.id} name={f.name} image={f.image} price={f.price} />
        ))}
      </div>
    </div>
  );
}

export default App;
