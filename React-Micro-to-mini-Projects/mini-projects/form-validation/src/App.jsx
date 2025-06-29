import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setSuccess(false);

    if (username.trim() === "") {
      setUsernameError("Username is Required");
      valid = false;
    }
    if (email.trim() === "") {
      setEmailError("Email is Required");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("Enter valid email");
      valid = false;
    }
    if (password.length < 8) {
      setPasswordError("Password must be of at least 8 characters");
      valid = false;
    }

    if (!valid) return;

    setSuccess(true);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#112233",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            padding: "40px 32px",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            minWidth: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#4f046e",
              marginBottom: "10px",
            }}
          >
            Form Validation
          </h2>
          <input
            type="text"
            placeholder="Enter Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: "16px",
            }}
          />
          {usernameError && (
            <p style={{ color: "red", margin: 0 }}>{usernameError}</p>
          )}

          <input
            type="email"
            placeholder="Enter Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: "16px",
            }}
          />
          {emailError && (
            <p style={{ color: "red", margin: 0 }}>{emailError}</p>
          )}

          <input
            type="password"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #bbb",
              fontSize: "16px",
            }}
          />
          {passwordError && (
            <p style={{ color: "red", margin: 0 }}>{passwordError}</p>
          )}

          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "#7c3aed",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Submit
          </button>
          {success && (
            <p style={{ color: "green", margin: 0 }}>
              Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
