import { useState } from "react";
import "./App.css";

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const emojis = ["😡", "😕", "🙂", "😃", "🤩"];

  const handleEmojis = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {emojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => handleEmojis(emoji)}
            style={{
              fontSize: "1.5rem",
              margin: "0 8px",
              background: selectedEmoji === emoji ? "#f218ff" : "white",
              border: "2px solid #cbd5e1",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {emoji}
          </button>
        ))}
        {selectedEmoji && (
          <div style={{ marginTop: "30px", fontSize: "1.5rem" }}>
            You selected: {selectedEmoji}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
