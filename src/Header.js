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
            <h1>Web & AI Engineer</h1>
            <p>
              Ahsen Nazir is an entrepreneur and business magnate. He is the
              founder, CEO, and Chief Engineer at SpaceX; early stage investor,
              CEO, and Product Architect of Tesla, Inc.; founder of The Boring
              Company; and co-founder of Neuralink and OpenAI. A
              centibillionaire, Ahsen is one of the richest people in the world.
            </p>
          </div>
          <SectionHeading title={"Connect"} />
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
