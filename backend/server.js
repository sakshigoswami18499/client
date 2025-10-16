require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "https://client-brown-tau.vercel.app/"],
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Mongoose Schema
const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  event: { type: String, required: true },
}, { timestamps: true });

const Registration = mongoose.model("Registration", registrationSchema);

// POST route for form submission
app.post("/register", async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).json({ message: "Registration saved!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
