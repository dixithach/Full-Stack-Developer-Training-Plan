
1) strings
let firstName: string = "Dixith";
console.log('firstName:', firstName);


2) numbers (both integers and floats use number)
let age: number = 25;
let temperature: number = 36.6;
console.log('age:', age, 'temperature:', temperature);


3) boolean
let isStudent: boolean = true;
console.log('isStudent:', isStudent);


4) string[] (array of strings)
let favoriteLanguages: string[] = ["JavaScript", "TypeScript", "Python"];
console.log('favoriteLanguages:', favoriteLanguages.join(', '));


5) Alternative array syntax using generics
let scores: Array<number> = [85, 92, 78];
console.log('scores:', scores);

6) Type inference
let inferredString = "I am inferred as string";
console.log('inferredString:', inferredString);

7) Explicitly annotate when needed
let mightBeNumber: number; // declared without initialization
mightBeNumber = 10;
console.log('mightBeNumber:', mightBeNumber);




