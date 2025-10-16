// App.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gallery from "./Gallery";
import Register from "./pages/Register";

// Home Page
function Home() {
  return (
    <section className="hero section-bg">
      <h1>
        Welcome to
        <br />
        <strong>Sakshi EventEase</strong>
      </h1>
      <p>Streamline your event planning with ease and joy.</p>
      <Link to="/about" className="btn big-btn">Get Started</Link>
    </section>
  );
}

// About Us Page
function About() {
  return (
    <section className="section about section-bg">
      <h2>About Us</h2>
      <p>
        <strong>Sakshi EventEase</strong> is your trusted platform for
        stress-free event management. Whether it’s a birthday party, wedding,
        or corporate event – we simplify the process and make your moments
        memorable.
      </p>
    </section>
  );
}

// Help Us Page
function Help() {
  return (
    <section className="section help section-bg">
      <h2>Help & Support</h2>
      <ul>
        <li>✨ How to plan and publish your event</li>
        <li>🔷 Managing guest lists and RSVPs</li>
        <li>🔮 Real-time updates and reminders</li>
        <li>⭐ Contact our 24/7 support team</li>
      </ul>
    </section>
  );
}

// Gallery Page
function GalleryPage() {
  return (
    <section className="section gallery section-bg">
      <h2>Event Gallery</h2>
      <Gallery />
    </section>
  );
}

// Login Page
function Login() {
  return (
    <section className="section login section-bg">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn login-btn">Login</button>
      </form>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App" style={{ overflow: "hidden" }}>
        {/* ✅ Navbar Section */}
        <nav className="navbar">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/859/859270.png"
              alt="logo"
            />
            <span>
              <strong>Sakshi</strong> EventEase
            </span>
          </div>

          {/* ✅ Navbar Links */}
          <ul className="nav-links">
            <li><Link to="/" className="btn red">Home</Link></li>
            <li><Link to="/about" className="btn teal">About Us</Link></li>
            <li><Link to="/help" className="btn purple">Help Us</Link></li>
            <li><Link to="/gallery" className="btn pink">Event Gallery</Link></li>
            <li><Link to="/login" className="btn orange">Login</Link></li>
            <li><Link to="/register" className="btn green">Register</Link></li> 
          </ul>
        </nav>

        {/* ✅ Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
