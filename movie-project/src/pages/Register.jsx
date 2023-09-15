import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import ApiClient from "../repositories/ApiClient";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
    username: "", // optional
    number: "",
    confirmPassword: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await ApiClient.register(formData);
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
            <label htmlFor="username">user name</label>
            <input
              type="text"
              value={formData.username}
              id="username"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="email">email</label>
            <input
              type="email"
              value={formData.email}
              id="email"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="number">number</label>
            <input
              type="number"
              value={formData.number}
              id="number"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="password">password</label>
            <input
              type="password"
              value={formData.password}
              id="password"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="confirmPassword">confirm password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              id="confirmPassword"
              onChange={(e) => handleChange(e)}
            />
            <button className="login-btn" type="submit">
              sign in
            </button>
          </form>
        </div>
        <div className="login-card my-5 flex-row justify-content-center">
          already have a account ? <Link to="/signin"> Sing up</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
