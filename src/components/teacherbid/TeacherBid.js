import React from "react";
import { Link } from "react-router-dom";
function TeacherBid() {
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
                <div class="col-md-12">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-12">
                  <div class="card-body">
                    <h5 class="card-title">Mathematics Tutor</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, quos.
                    </p>
                    <h3 className="price">RS:2000</h3>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Model Town Lahore
                      </small>
                    </p>
                    {/* <div class="col-md-3">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                      />
                      <span class="input-group-text">$</span>
                      <span class="input-group-text">0.00</span>
                    </div> */}
                    <div class="col-3">
                      {/* <i
                        class="fa fa-graduation-cap p-2"
                        aria-hidden="true"
                      ></i> */}
                      <label for="inputAddress" class="form-label">
                        Enter Your Bid
                      </label>
                      <input type="number" class="form-control" />
                    </div>
                    <div className="mt-4">
                      <button class="btn btn-primary text-white ">Done</button>
                    </div>
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

export default TeacherBid;
