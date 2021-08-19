import React from "react";
import "./ContactLinks.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import DraftsSharpIcon from "@material-ui/icons/DraftsSharp";

function ContactLinks() {
  return (
    <div className="contact-links-container">
      <a
        className="contact-link facebook"
        href="https://facebook.com/acen20"
        target="_blank"
      >
        <FacebookIcon />
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
