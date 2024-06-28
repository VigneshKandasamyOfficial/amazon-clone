import React from "react";
import "./Footer.css"; // Import your CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect with Us</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <ul>
            <li>Conditions of Use</li>
            <li>Privacy Notice</li>
            <li>Interest-Based Ads</li>
          </ul>
        </div>
        <div className="footer-bottom-copy">
          &copy; {new Date().getFullYear()} Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;
