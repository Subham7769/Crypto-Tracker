import React from "react";
import "./style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://github.com/Subham7769">
          <GitHubIcon className="social-link" />
        </a>
        <a href="mailto:shubham.rapariya2@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.linkedin.com/in/shubhamjain7769/">
          <LinkedInIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
