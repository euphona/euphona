import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      class="sticky-nav navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div class="container px-4 px-lg-5">
        <Link to="/" class="navbar-brand">
          euphona
        </Link>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto my-2 my-lg-0">
            <li class="nav-item">
              <Link to="/about" class="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/services" class="nav-link">
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/works" class="nav-link">
                Works
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
