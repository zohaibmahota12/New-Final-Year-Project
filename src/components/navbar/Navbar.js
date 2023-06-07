import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div class="container-fluid nav-bar bg-cust fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light  px-3">
          <a href="" class="navbar-brand d-flex align-items-center text-center">
            <div class="navbar-logo   text-right">
              <img class="nav-logo" src="assets/images/" alt="TutorEase.com" />
            </div>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-auto">
              <Link to="/Home" class="nav-item nav-link">
                Home
              </Link>
              <Link to="/Student-Profile" class="nav-item nav-link">
                Student Profile
              </Link>
              <Link to="/teacher-profile" class="nav-item nav-link">
                Teacher Profile
              </Link>
              <Link to="/" class="nav-item nav-link">
                Signin
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
      {/* <nav class="navbar navbar-expand-lg  fixed-top fs-5">
        <div class="container-fluid  ">
          <a class="navbar-brand" href="#">
            Teacher.com
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse p-2" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link " aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                About
              </a>
              <a class="nav-link" href="#">
                Profile
              </a>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default Navbar;
