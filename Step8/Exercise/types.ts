
// Define a Patient interface

interface Patient {
  name: string;
  age: number;
  condition: string;
}


// Define a UniversityCourse interface

 interface UniversityCourse {
  title: string;
  code: string;
  instructor: string;
}

const patient1: Patient = {
  name: "John Doe",
  age: 45,
  condition: "Diabetes",
};

const course1: UniversityCourse = {
  title: "Introduction to TypeScript",
  code: "TS101",
  instructor: "Dr. Smith",
};

console.log(patient1, course1);