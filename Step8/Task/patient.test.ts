// 1) Interface declarations
interface Patient {
  id: number;
  name: string;
  age: number;
  medications?: string[];   // optional
  hasInsurance: boolean;
  readonly createdAt: Date; // cannot be reassigned
  // an index signature for extra custom fields (optional)
  [extra: string]: any;
}

interface InsuredPatient extends Patient {
  insuranceProvider: string;
  policyNumber: string;
}


// 2) Create patients
const patientA: Patient = {
  id: 1,
  name: "Anita Rao",
  age: 34,
  medications: ["Paracetamol", "Vitamin D"],
  hasInsurance: false,
  createdAt: new Date(),
};

const patientB: InsuredPatient = {
  id: 2,
  name: "Ravi Kumar",
  age: 45,
  medications: [],
  hasInsurance: true,
  createdAt: new Date("2025-01-02"),
  insuranceProvider: "HealthFirst",
  policyNumber: "HF-9988",
  // extra property — allowed because of index signature in Patient
  notes: "Diabetic, monitor blood sugar",
};