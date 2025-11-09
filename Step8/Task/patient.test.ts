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