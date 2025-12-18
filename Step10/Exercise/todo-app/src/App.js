import React, { useState } from "react";
import "./App.css"; // Plain CSS file


// Simple TodoItem component without Tailwind
function TodoItem({ task }) {
const [completed, setCompleted] = useState(false);


const toggleCompleted = () => setCompleted((c) => !c);


return (
<div className="todo-item">
<span className={completed ? "task completed" : "task"}>{task}</span>


<button onClick={toggleCompleted} className="toggle-btn">
{completed ? "Undo" : "Complete"}
</button>
</div>
);
}


// Example App using TodoItem
export default function App() {
return (
<div className="app-container">
<div className="todo-box">
<h1 className="title">My Todo List</h1>


<TodoItem task="Buy groceries" />
<TodoItem task="Finish React homework" />
<TodoItem task="Call Mom" />
</div>
</div>
);
}