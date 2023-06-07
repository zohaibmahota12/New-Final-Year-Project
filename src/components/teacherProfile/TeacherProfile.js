import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function TeacherProfile() {
  const [username, setUserName] = useState(" ");
  const [useremail, setUserEmail] = useState(" ");
  const [password, setUserPassword] = useState(" ");
  const [phonenumber, setPhoneNumber] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [birthday, setDateOfBirth] = useState(" ");
  const [homeaddress, setHomeAddress] = useState(" ");
  const [qualification, setQualification] = useState(" ");

  function handleDate(e) {
    e.preventDefault();

    //  API post method

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        username,
        useremail,
        password,
        // teacherprofile,
        gender,
        qualification,
        phonenumber,
        birthday,
        homeaddress,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <section
        className="teacher-profile"
        style={{ backgroundColor: "aliceblue" }}
      >
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

            {/* ===============================================================
          Student Form 
          =============================================================== */}

            <div
              className="col-md-8 p-5 mt-5 border mb-4"
              style={{ backgroundColor: "white" }}
            >
              <div class="teacher-profile-tab-nav ">
                <div className="form">
                  <div className="inputs">
                    <div class="row">
                      <div className="from-title">
                        <h2 className="mb-4">Profile Information </h2>
                      </div>
                      <form class="row g-3" onSubmit={handleDate}>
                        <div class="col-md-6 mb-3">
                          <i class="fa fa-user p-2" aria-hidden="true"></i>
                          <label for="inputEmail4" class="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="fullname"
                            name="fullname"
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <i class="fa fa-envelope p-2" aria-hidden="true"></i>
                          <label for="inputEmail4" class="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail4"
                            onChange={(e) => setUserEmail(e.target.value)}
                          />
                        </div>

                        <div class="col-md-6 mb-3">
                          <i class="fas fa-phone p-2"></i>
                          <label for="inputPassword4" class="form-label">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            class="form-control"
                            id="inputPhone4"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>

                        <div class="col-md-6 mb-3">
                          <i class="fas fa-male p-2"></i>
                          <label for="inputState" class="form-label">
                            Gender
                          </label>
                          <select
                            id="inputState"
                            class="form-select"
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option selected>Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div class="col-md-6 mb-3">
                          <i
                            class="fa fa-birthday-cake p-2"
                            aria-hidden="true"
                          ></i>
                          <label for="inputBirthday" class="form-label">
                            Date Of Birth
                          </label>
                          <input
                            type="date"
                            class="form-control"
                            id="inputZip"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <i
                            class="fa fa-graduation-cap p-2"
                            aria-hidden="true"
                          ></i>
                          <label for="inputAddress" class="form-label">
                            Your Qualification
                          </label>
                          <select
                            id="inputState"
                            class="form-select"
                            onChange={(e) => setQualification(e.target.value)}
                          >
                            <option selected>Choose...</option>
                            <option>intermediate </option>
                            <option>B.A</option>
                            <option>BS</option>
                            <option>Master's </option>
                            <option>M.Phil</option>
                            <option>P.H.D</option>
                          </select>
                        </div>

                        <div class="col-md-12 mb-3">
                          <i class="fa fa-home p-2" aria-hidden="true"></i>
                          <label for="inputAddress" class="form-label">
                            Home Address
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                            onChange={(e) => setHomeAddress(e.target.value)}
                          />
                        </div>

                        <div class="col-md-6">
                          <i class="fa fa-upload" aria-hidden="true"></i>
                          <label for="inputBirthday" class="form-label">
                            Upload Profile Pic
                          </label>
                          <input
                            type="file"
                            class="form-control"
                            id="inputZip"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                          />
                        </div>
                        <div className="mt-4">
                          <button class="btn btn-primary">Update</button>
                          <button class="btn  btn-light">Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeacherProfile;
