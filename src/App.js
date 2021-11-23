import "./App.css";
import React, { useState, useEffect } from "react";
import "@material-ui/core";
import { Grid, Container } from "@material-ui/core";
import Header from "./Header";
import Navbar from "./Navbar";
import SectionHeading from "./SectionHeading";
import Projects from "./Projects";
import Loader from "./Loader";
import ML from "./ML";

function App() {
  const [loading, setloading] = useState(false);
  {
    /*useEffect(() => {
    setTimeout(() => {
      setloading(!loading);
    }, 1000);
  }, []);*/
  }

  const turn_on = (e) => {
    document.querySelector(".app-animation").classList.toggle("eye-comfort");
  };
  return (
    <div className="app-animation">
      {loading && <Loader loading={loading} size={150} />}
      <Navbar />
      <Header />
      <Projects />
      <ML />
    </div>
  );
}

export default App;
