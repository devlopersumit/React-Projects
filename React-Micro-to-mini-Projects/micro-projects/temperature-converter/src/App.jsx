import { useState } from "react";
import "./App.css";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
  };

  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
  };

  const convertToFahrenheit = () => {
    if (celsius === "" || isNaN(celsius)) {
      setFahrenheit("");
    } else {
      setFahrenheit(((parseFloat(celsius) * 9) / 5 + 32).toFixed(2));
    }
  };

  const convertToCelsius = () => {
    if (fahrenheit === "" || isNaN(fahrenheit)) {
      setCelsius("");
    } else {
      setCelsius((((parseFloat(fahrenheit) - 32) * 5) / 9).toFixed(2));
    }
  };

  return (
    <>
      <div
        style={{
          maxWidth: "400px",
          margin: "60px auto",
          padding: "30px",
          borderRadius: "16px",
          background: "#f7fafc",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "24px", color: "#333" }}>
          Temperature Converter
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{ fontWeight: "bold", color: "#555" }}
            >
              Celsius:
            </label>
            <br />
            <input
              type="number"
              placeholder="Enter temperature in celsius..."
              value={celsius}
              onChange={handleCelsiusChange}
              style={{
                width: "80%",
                height: "36px",
                padding: "8px",
                marginTop: "8px",
                borderRadius: "6px",
                border: "1px solid #bbb",
                fontSize: "16px",
                marginBottom:'5px'
              }}
            />
            
            <button
              type="button"
              onClick={convertToFahrenheit}
              style={{
                marginLeft: "10px",
                padding: "8px 16px",
                borderRadius: "6px",
                border: "none",
                background: "#3182ce",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Convert to Fahrenheit
            </button>
          </div>

          <div>
            <label
              style={{ fontWeight: "bold", color: "#555" }}
            >
              Fahrenheit:
            </label>
            <br />
            <input
              type="number"
              placeholder="Enter temperature in fahrenheit..."
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              style={{
                width: "80%",
                height: "36px",
                padding: "8px",
                marginTop: "8px",
                borderRadius: "6px",
                border: "1px solid #bbb",
                fontSize: "16px",
                marginBottom:'5px'
              }}
            />
            
            <button
              type="button"
              onClick={convertToCelsius}
              style={{
                marginLeft: "10px",
                padding: "8px 16px",
                borderRadius: "6px",
                border: "none",
                background: "#38a169",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Convert to Celsius
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
