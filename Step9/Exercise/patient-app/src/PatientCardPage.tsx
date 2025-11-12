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