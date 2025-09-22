import { useState } from "react";
// import "./counter.css";

export default function CounterApp() {
  const [n, setN] = useState(0);
  return (
    <div className="panel">
      <button onClick={() => setN(n - 1)}>−</button>
      <span className="value">{n}</span>
      <button onClick={() => setN(n + 1)}>+</button>
      <button onClick={() => setN(0)}>Reset</button>
    </div>
  );
}
