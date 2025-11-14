import React, { useState } from "react";

export default function App() {

  // ---------------------------
  // 1) COUNTER STATE
  // ---------------------------

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  // ---------------------------
  // 2) CONTROLLED INPUT (NAME)
  // ---------------------------

  const [name, setName] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }


// ---------------------------
  // 3) TODO LIST
  // ---------------------------
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!todoText.trim()) return; // ignore empty text

    setTodos(prev => [...prev, todoText.trim()]);
    setTodoText("");
  }








return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>

      {/* --------------------------- */}
      {/*       COUNTER SECTION       */}
      {/* --------------------------- */}
      <h1>React Practice: Counter + Input + Todo</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>Counter</h2>
        <p>Current Count: <strong>{count}</strong></p>

        <button onClick={decrement}>-</button>
        <button onClick={increment} style={{ marginLeft: 8 }}>+</button>
        <button onClick={reset} style={{ marginLeft: 8 }}>Reset</button>
      </section>
     


           {/* --------------------------- */}
      {/*     CONTROLLED INPUT        */}
      {/* --------------------------- */}
      <section style={{ marginBottom: 40 }}>
        <h2>Enter Your Name</h2>

        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Type your name"
        />

        <p style={{ marginTop: 8 }}>Typed Name: <strong>{name}</strong></p>
      </section>


     {/* --------------------------- */}
      {/*          TODO LIST          */}
      {/* --------------------------- */}
      <section>
        <h2>Todo List</h2>

        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a task"
        />

        <button onClick={addTodo} style={{ marginLeft: 8 }}>
          Add Task
        </button>

        <ul style={{ marginTop: 16 }}>
          {todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>








      </div>
      );
















}