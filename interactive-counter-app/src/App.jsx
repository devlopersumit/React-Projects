import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const handleAdd = () => {
    setHistory((prev) => [...prev, count]);
    setCount((prev) => prev + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setHistory((prev) => [...prev, count]);
      setCount((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setHistory((prev) => [...prev, count]);
    setCount(0);
  };

  const handleDouble = () => {
    setHistory((prev) => [...prev, count]);
    setCount((prev) => prev * 2);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const prevHistory = [...history];
      const lastCount = prevHistory.pop();
      setCount(lastCount);
      setHistory(prevHistory);
      
    }
  };

  return (
    <>
      <div className="main">
        <div className="result">
          <h1>{count}</h1>
        </div>

        <div className="btns">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSubtract}>Subtract</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleDouble}>Double</button>
          <button onClick={handleUndo} disabled={history.length === 0}>
            Undo
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
