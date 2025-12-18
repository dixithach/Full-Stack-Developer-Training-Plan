// src/App.js
import React from "react";
import PatientCard from "./components/PatientCard";

function App() {
  const patients = [
    { name: "John Doe", age: 30, condition: "Flu" },
    { name: "Jane Smith", age: 45, condition: "Diabetes" },
    { name: "Sam Wilson", age: 25, condition: "Asthma" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Patient List</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {patients.map((p, index) => (
          <PatientCard key={index} patient={p} />
        ))}
      </div>
    </div>
  );
}

export default App;
