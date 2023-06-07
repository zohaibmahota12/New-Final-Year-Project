import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signin.css";

function SignIn() {
  const [email, setUserName] = useState(" ");
  const [password, setPassword] = useState(" ");

  // const header = `Authorization: Bearer ${token}`;

  // function handleDate(e) {
  //   e.preventDefault();

  //   //  API post method

  //   axios
  //     .post("https://dinero.thelastresort.com.pk/api/auth/login", {
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const loginEmail = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token, "Malik zohaib this is working");
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
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
      {/* Login Form  */}

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
                      <form onSubmit={loginEmail}>
                        <div className="d-flex align-items-center mb-3 pb-0">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-2">Logo</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-0"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className=" mb-4">
                          <input
                            type="email"
                            name="userName"
                            placeholder="Email"
                            id="userName"
                            required
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control 
                            "
                          />
                          <label className="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            id="pwd"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block">
                            Login
                          </button>
                        </div>

                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link
                            to="/register_account"
                            style={{ color: "#393f81" }}
                          >
                            Register here
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
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

export default SignIn;
