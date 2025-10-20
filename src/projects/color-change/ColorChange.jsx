import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#1e293b");
  const [copyText, setCopyText] = useState("Copy");

  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
    setCopyText("Copy");
  };

  const copyColor = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setCopyText("Copied!");
        setTimeout(() => setCopyText("Copy"), 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>{color}</h1>
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <button
          onClick={changeColor}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#fff",
            color: "#000",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Change Color
        </button>

        <button
          onClick={copyColor}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#fff",
            color: "#000",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          {copyText}
        </button>
      </div>
    </div>
  );
}
