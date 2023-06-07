import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/Signup/SignUp";
import Navbar from "./components/navbar/Navbar";
import UserProfile from "./components/userProfile/UserProfile";
import Footer from "./components/footer/Footer";
import StudentProfile from "./components/studentprofile/StudentProfile";
import Sidebar from "./components/sidebar/Sidebar";
import TeacherProfile from "./components/teacherProfile/TeacherProfile";
import CreateJob from "./components/createJob/JobCard";
import StudentJobForm from "./components/jobform/StudentJobForm";
import AcceptBid from "./components/bid/AcceptBid";
import TeacherBid from "./components/teacherbid/TeacherBid";
import JobCard from "./components/createJob/JobCard";
import UserForm from "./components/useless/UserForm";
import StudentJobCard from "./components/studentjobcard/StudentJobCard";
import UpdatePassword from "./components/updatepassword/UpdatePassword";
import UpdateStudentPass from "./components/updatestudentpass/UpdateStudentPass";
import SelectSubject from "./components/Sselectsubject/SelectSubject";
import Home from "./components/home/Home";
import FeedBack from "./components/feedback/FeedBack";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route>
            <Route path="/Security-password" element={<UpdatePassword />} />
            {/* <Route path="/Select-Subject" element={} /> */}
            <Route path="/Security" element={<UpdateStudentPass />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/Select-Subject" element={<SelectSubject />} />
            <Route path="/register_account" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/Home" element={<FeedBack />} /> */}
            <Route path="/Student-Profile" element={<StudentProfile />} />
            <Route path="/Teacher_Profile" element={<TeacherProfile />} />
            <Route path="/New-Post" element={<JobCard />} />
            <Route path="/Create_student_post" element={<StudentJobForm />} />
            <Route path="//teacher-profile" element={<TeacherProfile />} />
            <Route path="/Bids" element={<AcceptBid />} />
            <Route path="/bidding" element={<TeacherBid />} />
            <Route path="/My-jobs" element={<StudentJobCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}

      <Footer />
    </>
  );
}

export default App;
