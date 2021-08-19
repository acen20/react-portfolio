import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const lines = document.querySelectorAll(".hamburger .line");
    const navLinks = document.querySelector(".navbar-links");
    const links = document.querySelectorAll(".navbar-links li");

    links.forEach((link) =>
      link.addEventListener("click", () => {
        hamburger.click();
      })
    );

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("rotate");
      for (var i = 0; i < lines.length; i++) lines[i].classList.toggle("white");

      links.forEach((link) => link.classList.toggle("move-in"));
    });
  }, []);
  return (
    <div className="">
      <nav>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="navbar-links">
          <h4>Menu</h4>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <p>©2021 Ahsen Nazir. ♥ - Islamabad, Pakistan</p>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
