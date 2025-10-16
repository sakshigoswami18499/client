import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // optional for styling

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", formData);
      alert("✅ Registration saved successfully!");
      setFormData({ name: "", email: "", phone: "", event: "" });
    } catch (error) {
      alert("❌ Error saving data: " + error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>EventEase Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="event"
          placeholder="Enter Event Name"
          value={formData.event}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
