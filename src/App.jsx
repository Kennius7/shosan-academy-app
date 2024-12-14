import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MainContext } from "./context/mainContext.js";
import ScrollToTop from "../ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import '@mantine/core/styles.css';
import Login from "./pages/Login.jsx";





function App() {
  const [active, setActive] = useState("Home");
  const [loginState, setLoginState] = useState(false);
  let cartItemNumber = 10;
  const lightBlue = "#0E6DBA";
  const darkBlue = "#084170";
  const yellow = "#E0D538";

  return (
    <MainContext.Provider 
      value={{ active, setActive, cartItemNumber, lightBlue, darkBlue, yellow, loginState, setLoginState }}>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/register" element={ <Register /> } />
          <Route path="/dashboard" element={ <Dashboard /> } /> */}
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  )
}

export default App
