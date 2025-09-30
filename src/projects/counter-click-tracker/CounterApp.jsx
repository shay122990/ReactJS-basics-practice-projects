import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="panel">
      <h1>Counter App</h1>
      <div className="box">
        <button onClick={decreaseCount} className="smallBtn">
          -
        </button>
        {count}
        <button onClick={increaseCount} className="smallBtn">
          +
        </button>
      </div>
      <button onClick={resetCount} className="btn">
        Reset
      </button>
    </div>
  );
}
