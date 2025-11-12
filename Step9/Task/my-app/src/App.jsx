// 1) Imports (React is optional to import in modern JSX toolchains, but kept here for clarity)
import React, { useState } from "react";


function ChildCard({ name, age, onGreet, details, children }) {
// Child uses the data passed in, and can call back to parent via a function prop (onGreet)
return (
<div className="p-4 rounded-2xl shadow-md max-w-md">
<h3 className="text-xl font-semibold">Child component</h3>
<p>Name: <strong>{name}</strong></p>
<p>Age: <strong>{age}</strong></p>


{/* Render an object prop (details) safely */}
<p>Role: <strong>{details.role}</strong></p>
<p>Skills: <strong>{details.skills.join(", ")}</strong></p>


{/* The child can call a function passed by the parent */}
<button
className="mt-2 px-3 py-1 rounded-lg border"
onClick={() => onGreet(name)}
>
Greet from child
</button>


{/* Render any children that were placed between <ChildCard> ... </ChildCard> */}
{children && (
<div className="mt-2 text-sm italic">{children}</div>
)}
</div>
);
}



// 3) Parent component (creates state and passes data to Child)
function ParentContainer() {
// Local state in parent — this demonstrates passing state down as props
const [parentMessage, setParentMessage] = useState("Hello from Parent!");


// A function to be passed down so the child can call back
function handleGreetFromChild(childName) {
// This runs in the parent when child clicks the button
alert(`Parent received greeting from ${childName}`);
}


// Data to pass down
const person = { name: "Dixith", age: 36 };
const details = { role: "Frontend Dev", skills: ["React", "CSS", "JS"] };


return (
<div className="space-y-4">
<h2 className="text-2xl font-bold">Parent component</h2>


<p>Message in parent state: <strong>{parentMessage}</strong></p>


{/* Passing primitive props */}
<ChildCard
name={person.name}
age={person.age}
details={details}
onGreet={handleGreetFromChild}
>
{/* Anything placed here becomes the child component's children prop */}
<em>This is a note that shows how children prop works.</em>
</ChildCard>


{/* You can pass inline values too */}
<ChildCard
name={"Ravi"}
age={30}
details={{ role: "Tester", skills: ["Automation"] }}
onGreet={(n) => console.log("Greeted from", n)}
/>
</div>
);
}