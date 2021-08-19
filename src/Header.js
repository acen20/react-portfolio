import React from "react";
import "./Header.css";
import RingLoader from "react-spinners/RingLoader";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="intro-container">
          <h3>Ahsen Nazir</h3>
          <h1>Web & AI Engineer</h1>
          <p>
            Ahsen Nazir is an entrepreneur and business magnate. He is the
            founder, CEO, and Chief Engineer at SpaceX; early stage investor,
            CEO, and Product Architect of Tesla, Inc.; founder of The Boring
            Company; and co-founder of Neuralink and OpenAI. A centibillionaire,
            Ahsen is one of the richest people in the world.
          </p>
        </div>
        <div className="slider-container">
          <RingLoader size={100} />
        </div>
      </header>
    </div>
  );
}

export default Header;
