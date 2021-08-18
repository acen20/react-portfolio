import React, { useEffect } from "react";
import "./Loader.css";

function Loader(display) {
  return (
    <div className="loader-body">
      <div className="loader-main">
        <div className="loader-grid">
          <div>
            <h4 className="loader-main-text open-text">Please wait</h4>
            <h2 className="loader-main-text open-text">It will be worth it</h2>
            <p className="loader-main-text open-text">loading</p>
          </div>
        </div>
        <div className="loader-line"></div>
        <div className="loader-line delay-200ms"></div>
        <div className="loader-line delay-400ms"></div>
        <div className="loader-line delay-600ms"></div>
        <div className="loader-line delay-800ms"></div>
        <div className="loader-line delay-1000ms"></div>
        <div className="loader-line delay-1200ms"></div>
        <div className="loader-line delay-600ms"></div>
        <div className="loader-line delay-200ms"></div>
        <div className="loader-line delay-400ms"></div>
      </div>
    </div>
  );
}

export default Loader;
