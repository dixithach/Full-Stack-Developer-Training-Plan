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