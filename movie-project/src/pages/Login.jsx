import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location = "/";
      });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  return (
    <>
      <div className="container my-5 py-5 d-flex flex-column justify-content-center align-items-center">
        <div>
          <div className="text-center mb-1">
            <h1>ShowHub</h1>
            <h5>Sign in to ShowHub</h5>
          </div>
          <form className="login-card" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
            <button className="login-btn" type="submit">
              sign in
            </button>
            <p className="form-text text-primary">Forgot password?</p>
          </form>
        </div>
        <div className="login-card my-5 flex-row justify-content-center">
          New to ShowHub? <Link to="/signup">Create an account .</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
