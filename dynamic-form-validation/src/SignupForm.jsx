import React, { useState } from "react";

function SignupForm() {
  // ✅ Track all input values inside a single object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ✅ Track errors for each input
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ✅ Store success message (optional)
  const [success, setSuccess] = useState("");

  // 📌 VALIDATION FUNCTION - Runs on each input change
  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) error = "Name is required";
      else if (value.trim().length < 2) error = "Name must be at least 2 characters";
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) error = "Email is required";
      else if (!emailRegex.test(value)) error = "Enter a valid email";
    }

    if (name === "password") {
      if (!value.trim()) error = "Password is required";
      else if (value.length < 6) error = "Password must be at least 6 characters";
    }

    return error;
  };

  // 📌 HANDLE INPUT CHANGE - Updates value + runs validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Update form data
    setFormData((prev) => ({ ...prev, [name]: value }));

    // ✅ Validate the field and show error if needed
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));

    // ✅ Clear success message if user types again
    setSuccess("");
  };

  // 📌 HANDLE FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    let allValid = true;
    const newErrors = {};

    // ✅ Validate all fields one by one
    for (let key in formData) {
      const error = validateField(key, formData[key]);
      newErrors[key] = error;
      if (error) allValid = false;
    }

    setErrors(newErrors);

    if (allValid) {
      setSuccess("Form submitted successfully!");
      // You can send the data to a server here (optional)
      console.log("Submitted Data:", formData);
    } else {
      setSuccess(""); // clear success if invalid
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h2>Sign Up</h2>

      {/* 🔹 NAME INPUT */}
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      <br />

      {/* 🔹 EMAIL INPUT */}
      <input
        type="text"
        name="email"
        placeholder="Enter Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <br />

      {/* 🔹 PASSWORD INPUT */}
      <input
        type="password"
        name="password"
        placeholder="Enter Your Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      <br />

      <button type="submit">Sign Up</button>
      <br />
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
}

export default SignupForm;
