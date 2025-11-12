import React from "react";

// Step 1: Define the shape of patient data using an interface
interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  insured: boolean;
  medications: string[];
}


// Step 2: Create a component that accepts one patient as a prop
interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  return (
    <div style={{
      border: "1px solid gray",
      borderRadius: "10px",
      padding: "10px",
      marginBottom: "10px",
      backgroundColor: "#f9f9f9"
    }}>
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Condition: {patient.condition}</p>
      <p>
        Insurance: {patient.insured ? "✅ Yes" : "❌ No"}
      </p>
      <p>
        Medications: {patient.medications.length > 0 ? patient.medications.join(", ") : "None"}
      </p>
    </div>
  );
};



// Step 3: Create a page that shows 3 patients
const PatientCardPage: React.FC = () => {
  const patients: Patient[] = [
    {
      id: "1",
      name: "Anita Sharma",
      age: 34,
      condition: "Diabetes",
      insured: true,
      medications: ["Metformin", "Amlodipine"],
    },
    {
      id: "2",
      name: "Rohit Patel",
      age: 46,
      condition: "Hypertension",
      insured: false,
      medications: ["Losartan"],
    },
    {
      id: "3",
      name: "Meera Iyer",
      age: 27,
      condition: "Asthma",
      insured: true,
      medications: [],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Patient List</h1>
      {patients.map((p) => (
        <PatientCard key={p.id} patient={p} />
      ))}
    </div>
  );
};

export default PatientCardPage;