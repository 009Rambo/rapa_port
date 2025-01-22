import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/009Rambo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ramesh-pandey-189a9222a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <div className="copyright">
      <p><span className="copyright-symbol">&copy;</span> All Rights Reserved 2025</p>
      </div>
    </footer>
  );
}

export default Footer;