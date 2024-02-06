import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  function addNum() {
    setCount((c) => c + 1);
  }
  function minusNum() {
    setCount((c) => c - 1);
  }
  function reset() {
    setCount((c) => 0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addNum}>Add</button>
      <button onClick={minusNum}>Subtract</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Count;
