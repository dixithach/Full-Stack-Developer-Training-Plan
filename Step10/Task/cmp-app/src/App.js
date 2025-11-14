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
     </div>
      );
















}