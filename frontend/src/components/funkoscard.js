// src/FunkoCard.js
import React from "react";

function FunkoCard({ name, image, price }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      width: "200px",
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      background: "#fff"
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100%", borderRadius: "8px" }} 
      />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}

export default FunkoCard;
