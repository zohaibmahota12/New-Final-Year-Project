import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import Studentsidebar from "../studentsidebar/Studentsidebar";

function UpdateStudentPass() {
  const [oldpass, setOldPassword] = useState(" ");
  const [newpass, setNewPassword] = useState(" ");
  const [confirmpass, setConfirmPassword] = useState(" ");

  const UpdatePassword = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    // console.log(token, "Malik zohaib this is working");
    const formData = new FormData();
    formData.append("oldPassword", oldpass);
    formData.append("NewPassWord", newpass);
    formData.append("confrimPassword", confirmpass);
    const body = formData;

    const response = await axios.post(
      "https://dinero.thelastresort.com.pk/api/auth/login",
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,

          Accept: "application/json",
        },
      }
    );

    console.log(response);
  };
  return (
    <>
      <section
        className="update-student-pass"
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
                    class="nav-link active"
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
                    class="nav-link "
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
            <div className="col-md-6 col-lg-8 col-xl-7 p-5">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={UpdatePassword}>
                    <div className="d-flex align-items-center mb-3 pb-0">
                      <i
                        className="fas fa-cubes fa-2x me-4"
                        style={{ color: "#ff6219" }}
                      ></i>
                      <span className="h1 fw-bold mb-2">Forget Password</span>
                    </div>

                    <div className=" mb-2 mt-2">
                      <input
                        type="password"
                        name="oldpassword"
                        placeholder="Old Password"
                        id="oldpassword"
                        required
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="form-control 
                            "
                      />
                      <label className="form-label" for="form2Example17">
                        Old password
                      </label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="New Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="form2Example27">
                        New Password
                      </label>
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="form2Example27">
                        Confirm Password
                      </label>
                    </div>

                    <div className="pt-1 mb-2">
                      <button className="btn btn-dark btn-lg btn-block">
                        Update
                      </button>
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

export default UpdateStudentPass;
