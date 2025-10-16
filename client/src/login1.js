// Login.js
import React, { Component } from "react";
import "./styles.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (email === "eventease@gmail.com" && password === "123456") {
      this.setState({ message: "✅ Login successful." });
      alert("✅ Login successful!");
    } else {
      this.setState({ message: "❌ Incorrect email or password." });
      alert("❌ Incorrect email or password.");
    }
  };

  render() {
    return (
      <section className="loginSection">
        <h3>Login to Continue</h3>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="loginMessage">{this.state.message}</p>
      </section>
    );
  }
}

export default Login;
