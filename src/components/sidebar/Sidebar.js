import React from "react";
import { Link } from "react-router-dom";
import UserForm from "../useless/UserForm";
import UserProfile from "../userProfile/UserProfile";
import "./sidebar.css";

function Sidebar() {
  return (
    <>
      {/* side Bar with teacher profile */}

      <div className="col-md-3 p-5 ">
        <div class="profile-tab-nav border">
          <div class="p-4">
            <div class="img-circle text-center mb-3">
              <img src="./assets/images/user2.jpg" alt="Image" class="shadow" />
            </div>
            <h4 class="text-center">Muhammad Haris</h4>
          </div>
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <Link
              class="nav-link active"
              id="account-tab"
              data-toggle="pill"
              to="/Teacher_Profile"
              role="tab"
              aria-controls="account"
              aria-selected="true"
            >
              <i class="fa fa-home text-center mr-1"></i>
              Update Profile
            </Link>
            <Link
              class="nav-link"
              id="password-tab"
              data-toggle="pill"
              to="/Student_Profile"
              role="tab"
              aria-controls="password"
              aria-selected="false"
            >
              <i class="fa fa-key text-center mr-1"></i>
              Student Profile
            </Link>
            <Link
              class="nav-link"
              id="password-tab"
              data-toggle="pill"
              to="/Student_Profile"
              role="tab"
              aria-controls="password"
              aria-selected="false"
            >
              <i class="fa-solid fa fa-plus"></i>
              Create A New Job
            </Link>
            <Link
              class="nav-link"
              id="password-tab"
              data-toggle="pill"
              to="/Student_Profile"
              role="tab"
              aria-controls="password"
              aria-selected="false"
            >
              <i class="fa fa-key text-center mr-1"></i>
              Student Job
            </Link>
            <Link
              class="nav-link"
              id="security-tab"
              data-toggle="pill"
              to="/Student_Profile"
              role="tab"
              aria-controls="security"
              aria-selected="false"
            >
              <i class="fa fa-user text-center mr-1"></i>
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
