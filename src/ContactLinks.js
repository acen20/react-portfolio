import React from "react";
import "./ContactLinks.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import DraftsSharpIcon from "@material-ui/icons/DraftsSharp";

function ContactLinks() {
  return (
    <div className="contact-links-container">
      <a
        className="contact-link facebook"
        href="https://linkedin.com/in/ahsen-nazir10"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a
        className="contact-link github"
        href="https://github.com/acen20"
        target="_blank"
      >
        <GitHubIcon />
      </a>
      <a
        className="contact-link twitter"
        href="https://twitter.com/ahsen_nazir"
        target="_blank"
      >
        <TwitterIcon />
      </a>
      <a className="contact-link gmail" href="mailto:ahsenmailbox@gmail.com">
        <DraftsSharpIcon />
      </a>
    </div>
  );
}

export default ContactLinks;
