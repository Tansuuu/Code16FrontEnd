import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const user = localStorage.getItem("user");
  console.log(user);

  return (
    <nav className="navbar navbar-expand-lg header">
      <div className="container text-white p-0">
        <NavLink to="/" className="navbar-brand fw-bolder me-5">
          ShowHub
        </NavLink>
        <button
          className="navbar-toggler collesed collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarNavAltMarkup">
          <div className="d-flex gap-5">
            <NavLink
              to="/category/movies"
              className="text-dark text-decoration-none"
            >
              Movies
            </NavLink>
            <NavLink
              to="/category/series"
              className="text-dark text-decoration-none"
            >
              Series
            </NavLink>
            <NavLink to="/services" className="text-dark text-decoration-none">
              Services
            </NavLink>
            <NavLink to="/favourite" className="text-dark text-decoration-none">
              Favourites
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto d-flex gap-5 align-items-center">
            <div className="search-bar">
              <input
                className="header-search py-1 px-3 text-white"
                type="text"
                placeholder="Search"
              />
              <FontAwesomeIcon
                className="search-icon"
                icon={faMagnifyingGlass}
                style={{ color: "#ffffff" }}
              />
            </div>
            {user === null ? (
              <>
                <NavLink to="/signin" className="nav-link">
                  Sign in
                </NavLink>
                <NavLink
                  to="/signup"
                  className="nav-link border border-dark rounded"
                >
                  sign up
                </NavLink>
              </>
            ) : (
              <NavLink className="nav-link border border-dark px-4 rounded">
                {JSON.parse(user).username}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
