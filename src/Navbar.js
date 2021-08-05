import React from "react";
import "./Navbar.css";
import NavbarOption from "./NavbarOption";

function Navbar() {
  return (
    <div class="navbar">
      <div className="navbar-left">
        <div className="navbar-left-logo">A</div>
        <div className="navbar-left-logo-text">
          <h1>Ahsen Nazir</h1>
          <p>Data Scientist</p>
        </div>
      </div>

      <div className="navbar-right">
        <NavbarOption title="Home" link="#Home" />
        <NavbarOption title="Projects" link="#Projects" />
        <NavbarOption title="Contact" link="#Contact" />
        <NavbarOption title="Profile" link="#Profile" />
      </div>
    </div>
  );
}

export default Navbar;
