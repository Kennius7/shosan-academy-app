import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MainContext } from "./context/mainContext.js";
import ScrollToTop from "../ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import '@mantine/core/styles.css';
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Classes from "./pages/Classes.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import { DP1 } from "./assets";





function App() {
  const [active, setActive] = useState("Home");
  const [loginState, setLoginState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isEditProfile, setIsEditProfile] = useState({
    name: false,
    email: false,
    number: false,
    courseDetails: false,
  });

  const [profileFormData, setProfileFormData] = useState({
    name: "Kennius Boggs",
    email: "ogbogukenny@yahoo.com",
    number: "07033325279",
    batchNum: "001",
    courseDetails: "Web Development",
    courseProgress: 60,
  });

  const lightBlue = "#0E6DBA";
  const darkBlue = "#084170";
  const yellow = "#E0D538";
  const lastVisitedTime = "2 days ago";

  return (
    <MainContext.Provider 
      value={{ 
        active, setActive, lightBlue, darkBlue, yellow, DP1, 
        loginState, setLoginState, isLoggedIn, setIsLoggedIn, lastVisitedTime, 
        setIsEditProfile, isEditProfile, profileFormData, setProfileFormData,
        isMenuOpen, setIsMenuOpen
      }}
    >
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/classes" element={<Classes/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about_us" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  )
}

export default App
