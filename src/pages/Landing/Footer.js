import React from "react";
import logo from "../../img/logo.svg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src={logo} alt="" />
          <h2>
            DAVAO ORIENTAL REGIONAL
            <br />
            SCIENCE HIGH SCHOOL
          </h2>
        </div>
        <div className="footer__info">
          <h2>Contact Info</h2>
          <div className="footer__infoRow">
            <LocationOnIcon />
            <p>
              Government Center Barangay
              <br />
              Dahican, City of Mati, Davao
              <br />
              Oriental, Philippines, 8200
            </p>
          </div>
          <div className="footer__infoRow">
            <PhoneIcon />
            <p>811-0681</p>
          </div>
          <div className="footer__infoRow">
            <EmailIcon />
            <p>DORSHSofficial@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <a href="https://www.facebook.com/STREAMLINEDORSHS">
          <div className="footer__bottomFacebook">
            <FacebookIcon />
            <p>Dorshs Streamline</p>
          </div>
        </a>
        <div>
          <p>
            Copyright Davao Oriental Regional Science High School 2021. All
            Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
