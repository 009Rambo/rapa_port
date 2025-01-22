import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import mock00 from '../assets/images/mock00.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={mock00} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/009Rambo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ramesh-pandey-189a9222a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ramesh Pandey</h1>
          <p>Software Engineering Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/009Rambo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ramesh-pandey-189a9222a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;