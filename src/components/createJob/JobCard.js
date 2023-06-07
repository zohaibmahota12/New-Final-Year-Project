import React from "react";
import "./jobcard.css";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

function JobCard() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "aliceblue" }}>
        <div className="row">
          <div className="col-md-3 p-5 ">
            <div class="profile-tab-nav border">
              <div class="p-4">
                <div class="img-circle text-center mb-3">
                  <img
                    src="./assets/images/user2.jpg"
                    alt="Image"
                    class="shadow"
                  />
                </div>
                <p
                  className="text-center p-3"
                  style={{ textDecoration: "none" }}
                >
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
                  class="nav-link active"
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
                  class="nav-link"
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
          <div className="col-md-8 p-5 ">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-12 p-2">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-12">
                  <div class="card-body">
                    <Link to="/bidding" style={{ textDecoration: "none" }}>
                      <h5 class="card-title">Mathematics Tutor</h5>
                    </Link>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, quos.
                    </p>
                    <h3 className="price">RS:5000</h3>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Model Town Lahore
                      </small>
                      <i class="fa fa-phone p-2"></i>
                      <small class="text-body-secondary">+923035190106</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-12 p-2">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-12">
                  <div class="card-body">
                    <Link to="/bidding" style={{ textDecoration: "none" }}>
                      <h5 class="card-title">Mathematics Tutor</h5>
                    </Link>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, quos.
                    </p>
                    <h3 className="price">RS:1500</h3>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Model Town Lahore
                      </small>
                      <i class="fa fa-phone p-2"></i>
                      <small class="text-body-secondary">+923035190106</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-12 p-2">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-12">
                  <div class="card-body">
                    <Link to="/bidding" style={{ textDecoration: "none" }}>
                      <h5 class="card-title">Mathematics Tutor</h5>
                    </Link>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, quos.
                    </p>
                    <h3 className="price">RS:1200</h3>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Model Town Lahore
                      </small>
                      <i class="fa fa-phone p-2"></i>
                      <small class="text-body-secondary">+923035190106</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-12 p-2">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-12">
                  <div class="card-body">
                    <Link to="/bidding" style={{ textDecoration: "none" }}>
                      <h5 class="card-title">Mathematics Tutor</h5>
                    </Link>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, quos.
                    </p>
                    <h3 className="price">RS:4000</h3>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Model Town Lahore
                      </small>
                      <i class="fa fa-phone p-2"></i>
                      <small class="text-body-secondary">+923035190106</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
