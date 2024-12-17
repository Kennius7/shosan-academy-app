import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MainContext } from "./context/mainContext.js";
import ScrollToTop from "../ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import '@mantine/core/styles.css';
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import { DP1 } from "./assets";





function App() {
  const [active, setActive] = useState("Home");
  const [loginState, setLoginState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  let cartItemNumber = 10;
  const lightBlue = "#0E6DBA";
  const darkBlue = "#084170";
  const yellow = "#E0D538";
  const profileName = "Kennius Boggs";
  const email = "ogbogukenny@yahoo.com"
  const lastVisitedTime = "2 days ago";

  return (
    <MainContext.Provider 
      value={{ 
        active, setActive, cartItemNumber, lightBlue, darkBlue, yellow, DP1, email,
        loginState, setLoginState, isLoggedIn, setIsLoggedIn, profileName, lastVisitedTime 
      }}
    >
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          {/* <Route path="/register" element={ <Register /> } />
          <Route path="/dashboard" element={ <Dashboard /> } /> */}
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  )
}

export default App
