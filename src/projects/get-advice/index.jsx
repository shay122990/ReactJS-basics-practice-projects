import { useState, useEffect } from "react";
const GetAdvice = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);

    setAdvice(data.slip.advice);
    setCount((prev) => prev + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []); // will load twice due to strict mode, ignore for now
  return (
    <div className="panel">
      <h1>{advice}</h1>
      <button onClick={getAdvice} className="btn">
        Give advice
      </button>
      <p>
        You have read <em>{count}</em> pieces of advice
      </p>
    </div>
  );
};

export default GetAdvice;
