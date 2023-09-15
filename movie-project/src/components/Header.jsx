import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

export default function Header({ onChange }) {
  const [searchInput, setSearchInput] = useState("");
  const user = localStorage.getItem("user");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    onChange(e.target.value);
    // console.log(searchInput);
  };

  return (
    <nav className="navbar navbar-expand-lg header">
      <div className="container p-0">
        <NavLink
          to="/"
          state={{ from: searchInput }}
          className="navbar-brand fw-bolder me-5 text-color"
        >
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
              className="text-color text-decoration-none"
            >
              Movies
            </NavLink>
            <NavLink
              to="/category/series"
              className="text-color text-decoration-none"
            >
              Series
            </NavLink>
            <NavLink to="/services" className="text-color text-decoration-none">
              Services
            </NavLink>
            <NavLink
              to="/favourite"
              className="text-color text-decoration-none"
            >
              Favourites
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto d-flex gap-5 align-items-center">
            <div className="search-bar">
              <input
                className="header-search py-1 px-3 text-white"
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={handleChange}
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
              <div className="dropdown">
                <button
                  className="header-drop dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {JSON.parse(user).username}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/signin"
                      className="dropdown-item"
                      onClick={() => {
                        localStorage.removeItem("user");
                        localStorage.removeItem("favorites");
                      }}
                    >
                      Sign Out
                    </NavLink>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <NavItem />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
