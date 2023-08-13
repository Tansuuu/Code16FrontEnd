import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg nav">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src="/image/GYM24.png" alt="gym24" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto d-flex gap-5">
            <NavLink
              to="/advantages"
              className="nav-link active-page text-white"
              aria-current="page"
            >
              Advantages
            </NavLink>
            <NavLink to="/membership" className="nav-link navlink text-white">
              Membership
            </NavLink>
            <NavLink to="/about" className="nav-link navlink text-white">
              About
            </NavLink>
            <NavLink to="/trainers" className="nav-link navlink text-white">
              Trainers
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
