/* eslint-disable no-unused-vars */
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
import { monthFunct, dayFunct, hourFunct, minuteFunct, secFunct } from "./utils/data.js";



function App() {
  const [active, setActive] = useState("Home");
  const [loginState, setLoginState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signInToken, setSignInToken] = useState("");

  const [savedDateOnDataBase, setSavedDateOnDataBase] = useState("");
  const deadlineDate = new Date(savedDateOnDataBase);
  const todayDate = new Date;
  const todayTimeCounted = todayDate.valueOf();
  let deadlineTimeCounted = deadlineDate.valueOf();
  const fetchTimeout = 3000;

  const [isFetched, setIsFetched] = useState(false);

  const futureUTCDate = new Date(deadlineTimeCounted);
  const getHours = futureUTCDate.getHours();
  const getMinutes = futureUTCDate.getMinutes();
  const getSeconds = futureUTCDate.getSeconds();
  const getDay = futureUTCDate.getDate();
  const getMonth = futureUTCDate.getMonth();
  const getYear = futureUTCDate.getFullYear();
  const futureDate = `${monthFunct(getMonth)}/${dayFunct(getDay)}/${getYear} ${hourFunct(getHours)}:${minuteFunct(getMinutes)}:${secFunct(getSeconds)}`;

  const NowUTCDate = new Date;
  const getNowHours = NowUTCDate.getHours();
  const getNowMinutes = NowUTCDate.getMinutes();
  const getNowSeconds = NowUTCDate.getSeconds();
  const getNowDay = NowUTCDate.getDate();
  const getNowMonth = NowUTCDate.getMonth();
  const getNowYear = NowUTCDate.getFullYear();
  const nowDate = `${monthFunct(getNowMonth)}/${dayFunct(getNowDay)}/${getNowYear} ${hourFunct(getNowHours)}:${minuteFunct(getNowMinutes)}:${secFunct(getNowSeconds)}`;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // const [timeValues, setTimeValues] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  // const { days, hours, minutes, seconds } = timeValues;

  const ninetyDaysCount = 7776000000;
  let examTimeLimit = isNaN(deadlineTimeCounted) || isNaN(todayTimeCounted) 
    ? 1000000 : (deadlineTimeCounted - todayTimeCounted)/1000;


  const devApiFetchUrl = "http://localhost:3000/api/fetchdata";
  const apiFetchUrl = import.meta.env.VITE_API_FETCH_DATA_URL;


  const [profileFormData, setProfileFormData] = useState({
    name: "Guest",
    email: "guest@mail.com",
    number: "10000100001",
    batchNum: "000",
    courseDetails: "None",
    courseProgress: 3,
    id: "",
  });

  const downloadData = async () => {

    try {
        const response = await axios.get(apiFetchUrl, {
          headers: { 
              "Content-Type": "application/json", 
              Authorization: `Bearer ${signInToken}`,
          },
          // withCredentials: false,
        });
        // console.log("Res:>>>", response);
        const { name, email, number, batchNum, courseDetails, courseProgress, id } = response.data.data;

        setProfileFormData({ 
            ...profileFormData, 
            name: name, 
            email: email, 
            number: number, 
            batchNum: batchNum, 
            courseDetails: courseDetails, 
            courseProgress: courseProgress,
            id: id,
        });

        console.log("Updated Data: ", profileFormData);
        // console.log("Name: ", name);
        // localStorage.setItem("user", JSON.stringify(profileFormData));
        // console.log(profileFormData);
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => {
    if (profileFormData.name !== "Guest") {
      setIsLoggedIn(true);
    } else {
      downloadData();
      setIsLoggedIn(false);
    }
  });

  const fetchDateData = () => {
    console.log("Fetch Date...");
  }

  const updateDateFunction = () => {
    console.log("Update Date...");
  }

  useEffect(() => {
    if (!isFetched) {
      fetchDateData();
    }

    if (examTimeLimit < 1) {
      updateDateFunction();
    }

    const setExamTimerInterval = setInterval(() => {
        examTimeLimit = examTimeLimit - 1;
        setSeconds(()=>Math.floor(examTimeLimit % 60));
        setMinutes(()=>Math.floor((examTimeLimit / 60) % 60));
        setHours(()=>Math.floor((examTimeLimit / 3600) % 24));
        setDays(()=>Math.floor(examTimeLimit / 86400));
    }, 1000);


    return () => { clearInterval(setExamTimerInterval) }

  })

  console.log("Exam Time Limit: >>>", examTimeLimit);


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
        active, setActive, lightBlue, darkBlue, yellow, DP1, reactNativePics, examTimeLimit,
        loginState, setLoginState, isLoggedIn, setIsLoggedIn, lastVisitedTime, hours, minutes, seconds, days,
        profileFormData, setProfileFormData, isMenuOpen, setIsMenuOpen, signInToken, setSignInToken,
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
