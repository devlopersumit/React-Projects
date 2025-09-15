import { useState } from "react";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  const tabs = [
    { title: "About", content: "This is the About section." },
    { title: "Projects", content: "List of my React projects." },
    { title: "Contact", content: "Contact me at sumit@email.com" },
  ];

  const handleTabs = (tab) => {
    setSelectedTab(tab.title);
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        {tabs.map((tab, index) => (
          <h2
            key={index}
            onClick={() => handleTabs(tab)}
            style={{
              fontSize: "1.5rem",
              background: selectedTab === tab.title ? "#f1aff1" : "white",
              cursor: "pointer",
              color: "black",
              padding: "10px",
              borderRadius: "10px",
              display: "inline-block",
              marginRight: "30px",
            }}
          >
            {tab.title}
          </h2>
        ))}
      </div>
      <div
        style={{
          padding: "15px",
          border: "1px solid #eee",
          borderRadius: "10px",
          minHeight: "0px",
          background: "#111",
          width: "fit-content",
          marginLeft:'50px'
        }}
      >
        {tabs.find((tab) => tab.title === selectedTab)?.content}
      </div>
    </>
  );
}

export default App;
