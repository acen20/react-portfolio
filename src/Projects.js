import React from "react";
import "./Projects.css";
import netflix from "./images/t_netflix.png";
import slack from "./images/t_slack.png";
import spotify from "./images/t_spotify.png";
import police_shootings from "./images/t_police_shootings.png";
import NavigationSharpIcon from "@material-ui/icons/NavigationSharp";

function Projects() {
  return (
    <div id="projects" className="projects-container">
      {/*<!--https://res.cloudinary.com/practicaldev/image/fetch/s--BcXcD88z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/5sn1ah1x2i3kh1pqi1kg.jpg-->*/}

      <div>
        <img className="project-image" src={slack} />
        <div className="project-top-row">
          <div>
            <p>July 2021</p>
            <h2>Slack - social app for chat</h2>
          </div>

          <div className="project-badge">
            <h4>New</h4>
          </div>
        </div>
        <div className="project-caselink-container">
          <h4 className="project-detail-link">View Detail</h4>
          <NavigationSharpIcon className="material-icons" />
        </div>
      </div>
      <div>
        <img className="project-image" src={spotify} />
        <div className="project-top-row">
          <div>
            <p className="">July 2021</p>
            <h2>Spotify - web player UI and auth</h2>
          </div>
          <div className="project-badge">
            <h4>New</h4>
          </div>
        </div>
        <div className="project-caselink-container">
          <h4 className="project-detail-link">View Detail</h4>
          <NavigationSharpIcon className="material-icons" />
        </div>
      </div>
      <div>
        <img className="project-image" src={netflix} />
        <div className="project-top-row">
          <div>
            <p className="">July 2021</p>
            <h2>NETFLIX - using TMDB & YouTube API</h2>
          </div>
          <div className="project-badge">
            <h4>New</h4>
          </div>
        </div>
        <div className="project-caselink-container">
          <h4 className="project-detail-link">View Detail</h4>
          <NavigationSharpIcon className="material-icons" />
        </div>
      </div>
      <div>
        <img className="project-image" src={police_shootings} />
        <div className="project-top-row">
          <div>
            <p className="">June 2020</p>
            <h2>Data Viz - USA police shootings</h2>
          </div>
          <div className="project-badge">
            <h4>Gold</h4>
          </div>
        </div>
        <div className="project-caselink-container">
          <h4 className="project-detail-link">View Detail</h4>
          <NavigationSharpIcon className="material-icons" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
