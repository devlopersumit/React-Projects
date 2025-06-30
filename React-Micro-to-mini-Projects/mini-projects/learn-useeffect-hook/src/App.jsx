import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/5")
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          setLoading(false);
        });
    }, 2000);
  }, []);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) setName(savedName);
  }, []);

  useEffect(() => {
    if (name) localStorage.setItem("name", name);
  }, [name]);

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h2>useEffect Demo</h2>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #bbb",
          marginBottom: 20,
        }}
      />
      <div style={{ margin: "20px 0" }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          post && (
            <p>
              <b>Post Title:</b> {post.title}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default App;
