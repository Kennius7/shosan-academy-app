import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MainContext } from "./context/mainContext.js";
import ScrollToTop from "../ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";




function App() {
  const [active, setActive] = useState("Home");

  return (
    <MainContext.Provider value={{ active, setActive }}>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          {/* <Route path="/register" element={ <Register /> } />
          <Route path="/dashboard" element={ <Dashboard /> } /> */}
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  )
}

export default App
