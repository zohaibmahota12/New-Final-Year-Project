import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [username, setUserName] = useState(" ");
  const [useremail, setUserEmail] = useState(" ");
  const [password, setUserPassword] = useState(" ");
  const [teacherprofile, setTecaherProfile] = useState(" ");
  const [studentprofile, setStudentProfle] = useState(" ");

  const register = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    // console.log(token, "Malik zohaib this is working");
    const formData = new FormData();
    formData.append("User Name", username);
    formData.append("UserEmail", useremail);
    formData.append("Password", password);
    formData.append("TeacherProfile", teacherprofile);
    formData.append("StudentProfile", studentprofile);
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
      {/* Registertion From  */}
      <section className="vh-100 signin-form">
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card signin-card"
                style={{ borderRadius: "1rem" }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={register}>
                        <div className="d-flex align-items-center mb-3 pb-0">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-2">
                            Regiter Account
                          </span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-0"
                          style={{ letterSpacing: "1px" }}
                        >
                          Register Your Account
                        </h5>

                        <div className=" mb-4">
                          <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            id="userName"
                            required
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control 
                            "
                          />
                          <label className="form-label" for="form2Example17">
                            User Name
                          </label>
                        </div>
                        <div className=" mb-4">
                          <input
                            type="email"
                            name="useremail"
                            placeholder="Email"
                            id="useremail"
                            required
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="form-control 
                            "
                          />
                          <label className="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-3">
                          <input
                            type="password"
                            name="password"
                            id="pwd"
                            placeholder="Password"
                            onChange={(e) => setUserPassword(e.target.value)}
                            required
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>
                        <div className="row">
                          <div class="d-flex flex-row align-items-center ">
                            <i class="fa fa-check p-2" aria-hidden="true"></i>

                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="form3Example4cd">
                                Select Your Roll
                              </label>
                            </div>
                          </div>

                          <div className="col-3">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="teacher"
                                value="teacher"
                                required
                                onChange={(e) =>
                                  setTecaherProfile(e.target.value)
                                }
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Teacher
                              </label>
                            </div>
                          </div>

                          <div className="col-3">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="student"
                                value="student"
                                onChange={(e) =>
                                  setStudentProfle(e.target.value)
                                }
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Student
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="pt-1 ">
                          <button className="btn btn-dark btn-lg btn-block">
                            SignUp
                          </button>
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
      {/* <section class="vh-100 mt-2">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-0">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-3">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4" onSubmit={handleDate}>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              placeholder="Full Name "
                              required
                              onChange={(e) => setUserName(e.target.value)}
                            />
                            <label class="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              placeholder="User Email"
                              required
                              onChange={(e) => setUserEmail(e.target.value)}
                            />
                            <label class="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              placeholder="Enter Your Password"
                              required
                              onChange={(e) => setUserPassword(e.target.value)}
                            />
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div class="d-flex flex-row align-items-center ">
                            <i class="fa fa-check p-2" aria-hidden="true"></i>

                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="form3Example4cd">
                                Select Your Roll
                              </label>
                            </div>
                          </div>

                          <div className="col-3">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="teacher"
                                value="teacher"
                                required
                                onChange={(e) =>
                                  setTecaherProfile(e.target.value)
                                }
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Teacher
                              </label>
                            </div>
                          </div>
                          <div className="col-3">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="student"
                                value="student"
                                onChange={(e) =>
                                  setStudentProfle(e.target.value)
                                }
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Student
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5 mt-2">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button className="btn btn-primary btn-lg">
                            Register
                          </button>
                          <button type="button" class="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default SignUp;
