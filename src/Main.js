import React from "react";
import "./Main.css";
import Grid from "@material-ui/core/Grid";
import portrait from "./images/chris.png";

function Main() {
  return (
    <div className="main">
      <div className="main-text">
        <h2>Ahsen Nazir</h2>
        <h1>Data and Software Engineer</h1>
        <p>
          With over 2 years of experience in software engineering, I have come
          across remarkable achievements in my professional as well as academic
          career. I see programming as my favorite skill and I find data
          sciences intriguing and revolutionary.
        </p>
      </div>
      <div className="main-btns">
        <button>See projects</button>
        <button>About me</button>
      </div>
    </div>
  );
}

export default Main;
