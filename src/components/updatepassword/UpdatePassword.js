import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Teachersidebar from "../teachersidebar/Teachersidebar";

function UpdatePassword() {
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
      <div className="container-fluid" style={{ backgroundColor: "aliceblue" }}>
        <div className="row">
          <Teachersidebar />

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
                      old password
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
                    {/* <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                          >
                            Login
                          </button> */}
                  </div>

                  <p className="mb-2 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <Link to="/register_account" style={{ color: "#393f81" }}>
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
    </>
  );
}

export default UpdatePassword;
