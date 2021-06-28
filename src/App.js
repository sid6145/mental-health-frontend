import "./App.css";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import DoctorSignIn from "./Components/DoctorSignIn";
import DoctorSignUp from "./Components/DoctorSignUp";
import UserSignIn from "./Components/UserSignIn";
import UserSignUp from "./Components/UserSignup";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Community from "./Components/Community";
import DoctorsList from "./Components/DoctorsList";
import DoctorDashboard from "./Components/DoctorDashBoard";
import Dashboard from "./Components/UserDashBoard";
import Form from "./Components/form";
import DocProfile from "./Components/DoctorDashBoard/profile";
import UserProfile from "./Components/UserDashBoard/profile";
import SendDetails from "./Components/DoctorDashBoard/send-details";
import Blogs from "./Components/Blogs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/doctorssignin">
          <DoctorSignIn />
        </Route>
        <Route path="/doctorssignup">
          <DoctorSignUp />
        </Route>
        <Route path="/userssignin">
          <UserSignIn />
        </Route>
        <Route path="/userssignup">
          <UserSignUp />
        </Route>
        <Route path="/community">
          <Community />
        </Route>
        <Route path="/doctorslist">
          <DoctorsList />
        </Route>

        {localStorage.docToken ? (
          <Route path="/doctordashboard">
            <DoctorDashboard />
          </Route>
        ) : (
          <Redirect to="/doctorssignin" />
        )}

        {localStorage.docToken ? (
          <Route path="/docprofile">
            <DocProfile/>
          </Route>
        ) : (
          <Redirect to="/doctorssignin" />
        )}

        {localStorage.userToken ? (
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        ) : (
          <Redirect to="/userssignin" />
        )}

        <Route path="/userprofile">
          <UserProfile />
        </Route>

        <Route path="/form">
          <Form />
        </Route>
        <Route path="/send-details">
          <SendDetails />
        </Route>

        <Route path="/blogs">
          <Blogs />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
