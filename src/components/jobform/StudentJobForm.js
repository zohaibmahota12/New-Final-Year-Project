import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./jobform.css";
function StudentJobForm() {
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
      <section className="Student-job-form">
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
                    class="nav-link active"
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
                    class="nav-link "
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
            <div className="col-md-8 p-5">
              <div className="card student-form">
                {" "}
                <div className="form-title p-5">
                  <h1 className="Upload-form"></h1>

                  <form class="row " onSubmit={handleDate}>
                    <div class="col-md-12 p-3">
                      <i class="fa fa-user p-2" aria-hidden="true"></i>
                      <label for="inputEmail4" class="form-label">
                        Enter Your Post Title
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="fullname"
                        name="fullname"
                        placeholder="Title"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6 p-3">
                      <i class="fas fa-phone p-2"></i>
                      <label for="inputPassword4" class="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Enter Your Phone Number"
                        id="inputPhone4"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6 p-3">
                      <i class="fa-solid fa fa-dollar-sign p-2"></i>
                      <label for="inputPassword4" class="form-label">
                        Enter Your Price
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Offer Price to tutor"
                        id="inputPhone4"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6 p-3">
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
                    <div class="col-md-6 p-3">
                      <i
                        class="fa fa-graduation-cap p-2"
                        aria-hidden="true"
                      ></i>
                      <label for="inputAddress" class="form-label">
                        Select Your Subject
                      </label>
                      <select
                        id="inputState"
                        class="form-select"
                        onChange={(e) => setQualification(e.target.value)}
                      >
                        <option selected>Choose...</option>
                        <option>Geography </option>
                        <option>Economics</option>
                        <option>History</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Statistics</option>
                        <option>Psychology</option>
                        <option>Math</option>
                        <option>English</option>
                        <option>Computer</option>
                        <option>Urdu</option>
                        <option>Agriculture</option>
                        <option>Biochemistry </option>
                        <option>Political science</option>
                      </select>
                    </div>
                    <div class="col-md-12 p-3">
                      <i class="fa-sharp fa-solid fa fa-location-arrow p-2"></i>
                      <label for="inputPassword4" class="form-label">
                        Enter Your Location
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Location"
                        id="inputPhone4"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    
                    <div className="mt-4">
                      <button class="btn btn-primary text-white">POST</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StudentJobForm;
