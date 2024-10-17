import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <ul>
            <li>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faPinterest} />
              </Link>
            </li>
          </ul>
          <div className="footLogo">
            <Link to={'/'}>
              <img src="./logo2.png" alt="" />
            </Link>
          </div>
          <Link to={'/'} className="footLink">
            © sainte marie textile 2020
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
