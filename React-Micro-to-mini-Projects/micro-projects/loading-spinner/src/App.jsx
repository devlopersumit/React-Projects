import "./App.css";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <button onClick={() => setIsLoading(!isLoading)}>
        {isLoading ? "Show Loaded" : "Show Loading"}
      </button>
      {isLoading ? <p>Loading...</p> : <p>Loaded ✅</p>}
    </>
  );
}

export default App;
