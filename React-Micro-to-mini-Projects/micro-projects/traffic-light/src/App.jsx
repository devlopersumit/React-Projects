import "./App.css";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("red");

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Traffic Light</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: active === "red" ? "red" : "#ddd",
            margin: 5,
            border: "2px solid #333",
          }}
          onClick={() => setActive("red")}
        />
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: active === "yellow" ? "yellow" : "#ddd",
            margin: 5,
            border: "2px solid #333",
          }}
          onClick={() => setActive("yellow")}
        />
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: active === "green" ? "green" : "#ddd",
            margin: 5,
            border: "2px solid #333",
          }}
          onClick={() => setActive("green")}
        />
      </div>
    </>
  );
}

export default App;
