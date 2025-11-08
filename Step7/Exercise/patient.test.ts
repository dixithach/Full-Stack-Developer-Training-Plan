let patientName: string = "John Does";
let age: number = 45;
let hasInsurance: boolean = true;
let medications: string[] = ["Aspirin", "Metformin", "Lisinopril"];

console.log("Patient Details:");
console.log("------------------");
console.log("Name:", patientName);
console.log("Age:", age);
console.log("Has Insurance:", hasInsurance);
console.log("Medications:", medications.join(", "));


// node --loader ts-node/esm patient.test.ts to test the file//