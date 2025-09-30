import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (!input.trim()) return;
    setList((prevList) => [...prevList, input]);
    setInput("");
  };
  const handleDelete = (indexToRemove) => {
    setList((prevList) => prevList.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className="panel">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
      />
      <button onClick={addTask} className="btn">
        Add Task
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
