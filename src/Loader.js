import React, { useEffect } from "react";
import "./Loader.css";
import BounceLoader from "react-spinners/BounceLoader";
import logo from "./images/logo.png";

function Loader(display) {
  return (
    <div className="loader-body">
      <img
        className="loader-img"
        src="https://images.unsplash.com/photo-1533912352517-92dd08116ea4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwd2FsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      ></img>
      <div className="loader-main">
        <div className="loader-grid">
          <div>
            <h4 className="loader-main-text open-text">Please wait</h4>
            <h2 className="loader-main-text open-text"></h2>
            {/*<p className="loader-main-text open-text">loading</p>*/}
            {/*<BounceLoader
              loading={display}
              color={"black"}
              speedMultiplier={2}
            />*/}
            <img className="loader-logo" src={logo} alt="" />
            <p className="loader-footer">
              © 2021 Ahsen Nazir - Islamabad, Pakistan
            </p>
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
