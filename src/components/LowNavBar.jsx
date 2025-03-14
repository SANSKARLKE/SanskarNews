import React, { useState } from "react";
import PropTypes from "prop-types";
import "./component.css";
import ColourPicker from "./ColourPicker";

const LowNavBar = (props) => {
  const lstyle = {
    backgroundColor: props.mode === "light" ? "white" : props.colour,
    color: props.mode === "light" ? "black" : props.colour,
  };
  return (
    <div style={lstyle}>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand">Sanskar News</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/SANSKARLKE">
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/sanskarlke/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.onClick}
                style={{ cursor: "pointer" }}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
            <ColourPicker
              mode={props.mode}
              colour={props.colour}
              handleColourChange={props.handleColourChange}
            />
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <a>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default LowNavBar;
