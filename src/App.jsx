/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
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
import CourseSelect from "./components/CourseSelect.jsx";
import { DP1, reactNativePics } from "./assets";
// import { query, collection, where, getDocs } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { db, auth } from "../FirebaseConfig.js";
import axios from "axios";



function App() {
  const [active, setActive] = useState("Home");
  const [loginState, setLoginState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const apiUrl = import.meta.env.VITE_API_PROD_URL;


  const [profileFormData, setProfileFormData] = useState({
    name: "Guest",
    email: "guest@mail.com",
    number: "10000100001",
    batchNum: "000",
    courseDetails: "None",
    courseProgress: 3,
    id: "",
    currentlyLoggedInUser: null
  });

  const downloadData = async () => {

    try {
        const fetchedData = await axios.get(apiUrl);
        const { name, email, number, batchNum, courseDetails, courseProgress, id, currentlyLoggedInUser } = fetchedData;
        setProfileFormData({ 
            ...profileFormData, 
            name: name, 
            email: email, 
            number: number, 
            batchNum: batchNum, 
            courseDetails: courseDetails, 
            courseProgress: courseProgress,
            id: id,
            currentlyLoggedInUser: currentlyLoggedInUser
        });
        console.log("Updated Data: ", profileFormData);
        console.log("Name: ", name);
        // localStorage.setItem("user", JSON.stringify(profileFormData));
        // console.log(profileFormData);
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => {
    downloadData();
    if (profileFormData.currentlyLoggedInUser.displayName) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  });


  const lightBlue = "#0E6DBA";
  const darkBlue = "#084170";
  const yellow = "#E0D538";
  const lastVisitedTime = "2 days ago";

  localStorage.setItem("user", JSON.stringify(profileFormData));

  const userData = JSON.parse(localStorage.getItem("user"));

  console.log("Locally Stored Data: ", userData);


  return (
    <MainContext.Provider 
      value={{ 
        active, setActive, lightBlue, darkBlue, yellow, DP1, reactNativePics,
        loginState, setLoginState, isLoggedIn, setIsLoggedIn, lastVisitedTime, 
        profileFormData, setProfileFormData, isMenuOpen, setIsMenuOpen
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
          <Route path="/classes" element={<CourseSelect/>}>
            <Route path=":courseId" element={<CourseSelect/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  )
}

export default App
