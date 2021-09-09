import "./App.css";
import React, { useState, useEffect } from "react";
import "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Navbar from "./Navbar";
import SectionHeading from "./SectionHeading";
import Projects from "./Projects";
import Loader from "./Loader";

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(!loading);
    }, 3500);
  }, []);

  const turn_on = (e) => {
    document.querySelector(".app-animation").classList.toggle("eye-comfort");
  };
  return (
    <div className="app-animation">
      {loading && <Loader loading={loading} size={150} />}
      <Navbar />
      <Header />
      <SectionHeading title="Featured Projects" big="1" />
      <Projects />
    </div>
  );
}

export default App;
