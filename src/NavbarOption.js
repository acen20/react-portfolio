import React from "react";
import "./NavbarOption.css";

function NavbarOption({ title, link }) {
  return (
    <div>
      <a href={link} className="navbar-option">
        {title}
      </a>
    </div>
  );
}

export default NavbarOption;
