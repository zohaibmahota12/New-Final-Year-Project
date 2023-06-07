import React from "react";
import { Link } from "react-router-dom";
function Teachersidebar() {
  return (
    <>
      <div className="col-md-3 p-5 ">
        <div class="profile-tab-nav border">
          <div class="p-4">
            <div class="img-circle text-center mb-3">
              <img src="./assets/images/user2.jpg" alt="Image" class="shadow" />
            </div>
            <p className="text-center p-3" style={{ textDecoration: "none" }}>
              Muhammad Haris{" "}
              <Link to="/teacher-profile">
                <sup className="border ">Profile</sup>{" "}
              </Link>
            </p>
          </div>
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <Link
              class="nav-link "
              id="password-tab"
              data-toggle="pill"
              to="/New-Post"
              role="tab"
              aria-controls="password"
              aria-selected="false"
            >
              <i class="fas fa-graduation-cap"></i>
              Jobs
            </Link>
            <Link
              class="nav-link"
              id="security-tab"
              data-toggle="pill"
              to="/Select-Subject"
              role="tab"
              aria-controls="security"
              aria-selected="false"
            >
              <i class="fas fa-book-open"></i>
              Subjects
            </Link>
            <Link
              class="nav-link active"
              id="security-tab"
              data-toggle="pill"
              to="/Security-password"
              role="tab"
              aria-controls="security"
              aria-selected="false"
            >
              <i class="fa-solid fa fa-lock"></i>
              Security
            </Link>
            <Link
              class="nav-link"
              id="security-tab"
              data-toggle="pill"
              to="/"
              role="tab"
              aria-controls="security"
              aria-selected="false"
            >
              <i class="fas fa-sign-out-alt"></i>
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teachersidebar;
