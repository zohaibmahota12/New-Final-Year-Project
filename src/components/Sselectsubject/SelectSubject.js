import React from "react";
import $ from "jquery";
import "./selectsubject.css";
import { Link } from "react-router-dom";
function SelectSubject() {
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
                  class="nav-link active"
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

          <div className="col-md-8 p-5">
            <div className="title">
              <h1>Subject</h1>
            </div>
            <form action="">
              <ul className="my-check-box">
                <li>
                  <input type="checkbox" id="myCheckbox1" />
                  <label for="myCheckbox1">
                    <div class="bg-primary rounded text-white position-absolute end-0 bottom-0 m-1 py-1 px-2">
                      Math
                    </div>
                    <img
                      src="https://source.unsplash.com/120x150/?book"
                      alt="Subject Icone"
                    />
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="myCheckbox4" />
                  <label for="myCheckbox4">
                    <div class="bg-primary rounded text-white position-absolute end-0 bottom-0 m-1 py-1 px-2">
                      English
                    </div>
                    <img
                      src="https://source.unsplash.com/120x150/?english"
                      alt="Icone Subject"
                    />
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="myCheckbox5" />
                  <label for="myCheckbox5">
                    <div class="bg-primary rounded text-white position-absolute end-0 bottom-0 m-1 py-1 px-2">
                      Physics
                    </div>
                    <img
                      src="https://source.unsplash.com/120x150/?physics"
                      alt="Subject Icone"
                    />
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="myCheckbox2" />
                  <label for="myCheckbox2">
                    <div class="bg-primary rounded text-white position-absolute end-0 bottom-0 m-1 py-1 px-2">
                      Computer
                    </div>
                    <img
                      src="https://source.unsplash.com/120x150/?computer"
                      alt="Subject Icone"
                    />
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="myCheckbox3" />
                  <label for="myCheckbox3">
                    <div class="bg-primary rounded text-white position-absolute end-0 bottom-0 m-1 py-1 px-2">
                      Urdu
                    </div>
                    <img
                      src="https://source.unsplash.com/120x150/?urdu"
                      alt="Subject Icone"
                    />
                  </label>
                </li>
              </ul>

              {/* <div class="my-cards">
                <div class="col-md-3 card-inner card">
                  <div className="card-image text-center">
                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-1 py-1 px-3">
                      Math
                    </div>
                    <img
                      src="https://source.unsplash.com/120x150/?math-book"
                      alt=""
                    />
                  </div>

                  <input type="checkbox" />
                </div>
                <div class="col-md-3 card-inner card">
                  <div className="card-image text-center">
                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-1 py-1 px-3">
                      English
                    </div>
                    <img
                      src="https://source.unsplash.com/100x100/?english-book"
                      alt=""
                    />
                  </div>

                  <input type="checkbox" />
                </div>
                <div class="col-md-3 card-inner card">
                  <div className="card-image text-center">
                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-1 py-1 px-3">
                      Computer
                    </div>
                    <img
                      src="https://source.unsplash.com/100x100/?computer-book"
                      alt=""
                    />
                  </div>

                  <input type="checkbox" />
                </div>
                <div class="col-md-3 card-inner card">
                  <div className="card-image text-center">
                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-1 py-1 px-3">
                      Urdu
                    </div>
                    <img
                      src="https://source.unsplash.com/100x100/?urdu-book"
                      alt=""
                    />
                  </div>

                  <input type="checkbox" />
                </div>
                <div class="col-md-3 card-inner card">
                  <div className="card-image text-center">
                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-1 py-1 px-3">
                      chemistry
                    </div>
                    <img
                      src="https://source.unsplash.com/100x100/?chemistry-book"
                      alt=""
                    />
                  </div>

                  <input type="checkbox" />
                </div>
                <div class="col-md-3 card-inner card">
                  <div className="card-image text-center">
                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-1 py-1 px-3">
                      Physics
                    </div>
                    <img
                      src="https://source.unsplash.com/100x100/?physics-book"
                      alt=""
                    />
                  </div>

                  <input type="checkbox" />
                </div>
                <div class="col-md-3 card-inner card">
                  <div className="card-image text-center">
                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-1 py-1 px-3">
                      Bio
                    </div>
                    <img
                      src="https://source.unsplash.com/100x100/?bio-book"
                      alt=""
                    />
                  </div>

                  <input type="checkbox" />
                </div>
                <div class="col-md-3 card-inner card">
                  <div className="card-image text-center">
                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-1 py-1 px-3">
                      Math
                    </div>
                    <img
                      src="https://source.unsplash.com/100x100/?books"
                      alt=""
                    />
                  </div>

                  <input type="checkbox" />
                </div>
              </div> */}
              <div className="mt-4 text-center ">
                <button class="btn btn-primary text-white ">Done</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectSubject;
