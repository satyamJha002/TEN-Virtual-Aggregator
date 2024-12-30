import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div
          className="flex justify-around flex-wrap footer-mb"
          style={{ width: "100%" }}
        >
          <div className="footer-section2 ">
            <h3>ABOUT US</h3>
            <ul>
              <li>
                <p className="mxw" style={{ lineHeight: "1.4" }}>
                  TEN Virtual Aggregator is your one-stop platform for
                  discovering and bookmarking conferences that match your
                  professional journey. We help you stay connected with the
                  events that matter most to your career.
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-section2">
            <h3>QUICK LINKS</h3>
            <ul>
              <a href="/">
                <li>All Conference Alert</li>{" "}
              </a>
              <a href="/">
                <li>International Conferences</li>
              </a>
              <a href="/">
                <li>International Conference Alerts</li>
              </a>
              <a href="/">
                <li>Conference Alerts</li>
              </a>
            </ul>
          </div>
          <div className="footer-section ">
            <h3>QUICK LINKS</h3>
            <ul>
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/ScientificEvents">
                <li>Scientific Events</li>
              </a>

              <a href="/Journals">
                <li>Journals</li>
              </a>
              <a href="/PrivacyPolicy">
                <li>Privacy Policy</li>
              </a>
              <a href="/AddEvents">
                <li>Add Event</li>
              </a>
              <a href="/Faq">
                <li>FAQ</li>
              </a>
            </ul>
          </div>
        </div>
        <br />
        <hr />
        <div className="text-center" style={{ width: "100%" }}>
          <p>Copyright © 2024. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
