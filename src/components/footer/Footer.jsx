import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_left">
          <h3>Advocate Manju Prajapati</h3>
          <p className="footer_phone">+91-964382511</p>
        </div>
        <div className="footer_right">
          <ul className="footer_links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#whyus">Why Us</a></li>
            <li><a href="tel:+91964382511">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} Advocate Manju Prajapati. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
