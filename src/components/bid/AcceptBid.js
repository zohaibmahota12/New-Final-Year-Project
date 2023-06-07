import React from "react";
import { Link } from "react-router-dom";

function AcceptBid() {
  return (
    <>
      <section className="accept-bid" style={{ backgroundColor: "aliceblue" }}>
        <div className="container-fluid">
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
                    <Link to="/Student-Profile">
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
                    to="/Create_student_post"
                    role="tab"
                    aria-controls="password"
                    aria-selected="true"
                  >
                    <i class="fas fa-graduation-cap"></i>
                    &nbsp; Create New Job
                  </Link>
                  <Link
                    class="nav-link active"
                    id="password-tab"
                    data-toggle="pill"
                    to="/My-Jobs"
                    role="tab"
                    aria-controls="password"
                    aria-selected="false"
                  >
                    <i class="fas fa-chalkboard-teacher"></i>
                    &nbsp; My Job
                  </Link>
                  <Link
                    class="nav-link"
                    id="security-tab"
                    data-toggle="pill"
                    to="/Security"
                    role="tab"
                    aria-controls="security"
                    aria-selected="false"
                  >
                    <i class="fa-solid fa fa-lock"></i>
                    &nbsp; Security
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
                    &nbsp; Log Out
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-8 p-5 ">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-12 p-5">
                    <div class="card-body p-2">
                      <span class="float-end">
                        <i class="text-warning fa fa-star"></i>
                      </span>
                      <span class="float-end">
                        <i class="text-warning fa fa-star"></i>
                      </span>
                      <span class="float-end">
                        <i class="text-warning fa fa-star"></i>
                      </span>
                      <span class="float-end">
                        <i class="text-warning fa fa-star"></i>
                      </span>
                      <h5 class="card-title">Mathematics Tutor</h5>

                      <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates, quos.
                      </p>
                      <h3 className="price">RS:3500</h3>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Model Town Lahore
                        </small>
                        <i class="fa fa-phone p-2"></i>
                        <small class="text-body-secondary">+923035190106</small>
                      </p>
                      <p>
                        <a class="float-end btn btn-outline-primary ms-2">
                          {" "}
                          <i class="fa fa-reply"></i> Reply
                        </a>
                        <a class="float-end btn text-white btn-danger">
                          {" "}
                          <i class="fa fa-heart"></i> Like
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-12">
                    <div class="card-body">
                      <h5 class="card-title">Mathematics Tutor</h5>
                      <h3 className="price">RS:1700</h3>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Model Town Lahore
                        </small>
                        <i class="fa fa-phone p-2"></i>
                        <small class="text-body-secondary">+923035190106</small>
                      </p>
                      <div className="mt-4">
                        <button class="btn btn-primary text-white">
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-12">
                    <div class="card-body">
                      <h5 class="card-title">Mathematics Tutor</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates, quos.
                      </p>
                      <h3 className="price">RS:500</h3>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Model Town Lahore
                        </small>
                        <i class="fa fa-phone p-2"></i>
                        <small class="text-body-secondary">+923035190106</small>
                      </p>
                      <div className="mt-4">
                        <button class="btn btn-primary text-white">
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AcceptBid;
