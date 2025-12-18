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

// 3) Function that accepts the interface

function printPatientSummary(p: Patient) {
  console.log("---- Patient summary ----");
  console.log(`ID: ${p.id}`);
  console.log(`Name: ${p.name}`);
  console.log(`Age: ${p.age}`);
  console.log(`Has insurance: ${p.hasInsurance ? "Yes" : "No"}`);
  console.log(`Medications: ${p.medications && p.medications.length ? p.medications.join(", ") : "None"}`);
  console.log(`Created at: ${p.createdAt.toISOString()}`);
  // show any extras
  const extras = Object.keys(p).filter(k => !["id","name","age","medications","hasInsurance","createdAt"].includes(k));
  if (extras.length) {
    console.log("Extra fields:");
    for (const k of extras) console.log(`  - ${k}: ${(p as any)[k]}`);
  }
  console.log("-------------------------\n");
}


// 4) Function that returns a typed object

function createPatient(id: number, name: string, age: number): Patient {
  return {
    id,
    name,
    age,
    hasInsurance: false,
    createdAt: new Date(),
  };
}


// 5) Demonstrate usage

printPatientSummary(patientA);
printPatientSummary(patientB);

const patientC = createPatient(3, "Meera Shah", 28);
printPatientSummary(patientC);




