import React from "react";
import "./Header.css";
import ContactLinks from "./ContactLinks";
import RingLoader from "react-spinners/RingLoader";
import SectionHeading from "./SectionHeading";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="intro-container">
          <div className="intro-top-row">
            <p>Some brilliance will be placed here</p>
            <p>Some brilliance will be placed here</p>
            <p>Some brilliance will be placed here</p>
            <p>Some brilliance will be placed here</p>
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
      </header>
    </div>
  );
}

export default Header;
