// src/components/PatientCard.js
import React from "react";

function PatientCard({ patient }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "250px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>{patient.name}</h3>
      <p>Age: {patient.age}</p>
      <p>Condition: {patient.condition}</p>
    </div>
  );
}

export default PatientCard;
