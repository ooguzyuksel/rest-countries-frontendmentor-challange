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
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <h2 className="where-tag">Where in the world ?</h2>
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
        <button
          className="go-to-top-wrapper"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="go-to-top-container">
            <i className="fas fa-arrow-up"></i>
          </div>
        </button>
      </div>
    </>
  );
}

export default Navbar;
