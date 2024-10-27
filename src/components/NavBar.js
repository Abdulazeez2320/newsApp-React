import React from "react";
import { Link } from "react-router-dom";
import "../navstyle.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg border-bottom border-body fixed-top ">
      <div className="container-fluid">
        <Link
          className="navbar-brand fs-3"
          to="/"
          aria-current="page"
          style={{ color: "#C197D2", fontWeight: "1000" }}
        >
          SAMACHAR
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
            <li className="nav-item">
              <Link
                className="fw-bold fs-5 nav-link "
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fw-bold fs-5 nav-link "
                aria-current="page"
                to="/business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fw-bold fs-5 nav-link "
                aria-current="page"
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fw-bold fs-5 nav-link "
                aria-current="page"
                to="/health"
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fw-bold fs-5 nav-link "
                aria-current="page"
                to="/science"
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fw-bold fs-5 nav-link "
                aria-current="page"
                to="/sports"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="fw-bold fs-5 nav-link "
                aria-current="page"
                to="/technology"
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
