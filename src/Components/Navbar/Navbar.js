import React, { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import "./navbar.scss";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme);

  const themeChangeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <h2>Where in the world ?</h2>
        <button className="theme-button" onClick={themeChangeHandler}>
          {theme === "light" && (
            <>
              <span>
                <i className="far fa-moon"></i>
              </span>
              <span> Dark Mode</span>
            </>
          )}
          {theme === "dark" && (
            <>
              <span>
                <i className="far fa-sun"></i>
              </span>
              <span> Light Mode</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
