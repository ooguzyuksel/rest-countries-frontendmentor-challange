import React, { useContext } from "react";
import "../../App.scss";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import CountryDetail from "../CountryDetail/CountryDetail";
import ThemeContext from "../../Context/ThemeContext";

function ThemeContainer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "dark" : "light"}`}>
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/countrydetail" element={<CountryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default ThemeContainer;
