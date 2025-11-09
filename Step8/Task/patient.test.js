// 1) Interface declarations
// 2) Create patients
var patientA = {
    id: 1,
    name: "Anita Rao",
    age: 34,
    medications: ["Paracetamol", "Vitamin D"],
    hasInsurance: false,
    createdAt: new Date(),
};
var patientB = {
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
function printPatientSummary(p) {
    console.log("---- Patient summary ----");
    console.log("ID: ".concat(p.id));
    console.log("Name: ".concat(p.name));
    console.log("Age: ".concat(p.age));
    console.log("Has insurance: ".concat(p.hasInsurance ? "Yes" : "No"));
    console.log("Medications: ".concat(p.medications && p.medications.length ? p.medications.join(", ") : "None"));
    console.log("Created at: ".concat(p.createdAt.toISOString()));
    // show any extras
    var extras = Object.keys(p).filter(function (k) { return !["id", "name", "age", "medications", "hasInsurance", "createdAt"].includes(k); });
    if (extras.length) {
        console.log("Extra fields:");
        for (var _i = 0, extras_1 = extras; _i < extras_1.length; _i++) {
            var k = extras_1[_i];
            console.log("  - ".concat(k, ": ").concat(p[k]));
        }
    }
    console.log("-------------------------\n");
}
// 4) Function that returns a typed object
function createPatient(id, name, age) {
    return {
        id: id,
        name: name,
        age: age,
        hasInsurance: false,
        createdAt: new Date(),
    };
}
// 5) Demonstrate usage
printPatientSummary(patientA);
printPatientSummary(patientB);
var patientC = createPatient(3, "Meera Shah", 28);
printPatientSummary(patientC);
