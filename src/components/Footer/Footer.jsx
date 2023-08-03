import React from "react";

import "../Footer/footer.css";

import { PiCoffee } from "react-icons/pi";
import {PiYoutubeLogo} from "react-icons/pi";
import {PiTwitterLogo} from "react-icons/pi";
import {PiBrowsersDuotone} from "react-icons/pi";
import {PiPinterestLogo} from "react-icons/pi";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ----- LOGO START-----*/}
      <div className="logo">
        <PiCoffee className="logo__icon fs-1" />
        <div>
          <h1>Lezzet Sofrası</h1>
        </div>
      </div>
      {/* ----- SOCIAL END-----*/}
      <div className="footer__info">
        <div>
          <h5>Sosyal medya:</h5>
        </div>
        <div className="social fs-2">
          <Link to='#'><span><PiYoutubeLogo/></span></Link>
          <Link to='#'><span><PiTwitterLogo/></span></Link>
          <Link to='#'><span><PiBrowsersDuotone/></span></Link>
          <Link to='#'><span><PiPinterestLogo/></span></Link>
        </div>
      </div>
      {/* ----- SOCIAL START-----*/}
      <div></div>
    </footer>
  );
};

export default Footer;
