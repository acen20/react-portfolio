import React from "react";
import "./Projects.css";
import netflix from "./images/netflix.png";
import slack from "./images/slack.png";
import spotify from "./images/spotify.png";
import police_shootings from "./images/police_shootings.png";
import NavigationSharpIcon from "@material-ui/icons/NavigationSharp";

function Projects() {
  const display_project = (e) => {
    let elem = e.target;
    elem.classList.toggle("display-project");
  };

  return (
    <div id="projects" className="projects-container">
      {/*<!--https://res.cloudinary.com/practicaldev/image/fetch/s--BcXcD88z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/5sn1ah1x2i3kh1pqi1kg.jpg-->*/}

      <div onClick={display_project} className="project-container">
        <div>
          <img className="project-image" src={slack} />
          <div className="project-top-row">
            <div>
              <p className="project-duration-bgdark">July 2021</p>
              <h2>Slack - social app for chat</h2>
            </div>

            <div className="project-badge">
              <h4>New</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div>
          <img className="project-image" src={spotify} />
          <div className="project-top-row">
            <div>
              <p className="project-duration-bgdark">July 2021</p>
              <h2>Spotify - web player UI and auth</h2>
            </div>
            <div className="project-badge">
              <h4>New</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div>
          <img className="project-image" src={netflix} />
          <div className="project-top-row">
            <div>
              <p className="project-duration-bgdark">July 2021</p>
              <h2>NETFLIX - using TMDB & YouTube API</h2>
            </div>
            <div className="project-badge">
              <h4>New</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div>
          <img className="project-image" src={police_shootings} />
          <div className="project-top-row">
            <div>
              <p className="project-duration-bgdark">June 2020</p>
              <h2>Data Viz - USA police shootings</h2>
            </div>
            <div className="project-badge">
              <h4>Gold</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div>
          <img className="project-image" src={police_shootings} />
          <div className="project-top-row">
            <div>
              <p className="project-duration-bgdark">June 2020</p>
              <h2>Data Viz - USA police shootings</h2>
            </div>
            <div className="project-badge">
              <h4>Gold</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div>
          <img className="project-image" src={police_shootings} />
          <div className="project-top-row">
            <div>
              <p className="project-duration-bgdark">June 2020</p>
              <h2>Data Viz - USA police shootings</h2>
            </div>
            <div className="project-badge">
              <h4>Gold</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
