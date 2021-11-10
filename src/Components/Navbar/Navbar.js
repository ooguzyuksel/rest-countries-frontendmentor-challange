import React from "react";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <h2>Where in the world ?</h2>
        <button>
          <span>
            <i className="far fa-moon"></i>
          </span>
          <span>Dark Mode</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
