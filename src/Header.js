import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import ContactLinks from "./ContactLinks";
import RingLoader from "react-spinners/RingLoader";
import SectionHeading from "./SectionHeading";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Header() {
  return (
    <div id="home">
      <header className="header">
        {/*<div className="web-logo">
          <img src={logo} alt="" />
        </div>*/}
        <div className="intro-container">
          <div className="intro-top-row">
            <code>Bahria University (BUIC)</code>
            <code>PIEAS</code>
            <code>Freelancer</code>
            <code>Smart Solutions</code>
          </div>
          <div className="neon-squares">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="intro">
            <h3>Ahsen Nazir</h3>
            <h1>ML Engineer</h1>
            <p>
              Ahsen Nazir is a computer scientist. He has worked as a{" "}
              <code>Software Developer</code> for a brief period where he
              contributed in various departments. He has chosen the domain of{" "}
              <code>Machine Learning</code> for his future endeavours. He is
              particularly interested in advanced machine learning approaches
              based on <code>Deep Learning for various modalities</code>. He is
              currently enrolled in <code>MS Computer Science</code> with{" "}
              <code>Deep Neural Networks</code> as major at Pakistan Institute
              of Engineering and Applied Sciences <code>(PIEAS)</code> under{" "}
              <code>IT Fellowship</code>.
            </p>
          </div>
          <SectionHeading title={"Connect"} big={0} />
          <ContactLinks />
        </div>
        <div className="slider-container">
          <RingLoader size={100} color={"white"} />
        </div>
        <ExpandMoreOutlinedIcon className="scroll-down" />
      </header>
    </div>
  );
}

export default Header;
