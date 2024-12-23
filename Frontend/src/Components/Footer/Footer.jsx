import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-content'>
      <div className="footer-section ">
        <h3>ABOUT US</h3>
        <p>
        
       Academic World Research is a resourceful hub for finding and saving international conferences that align with your academic goals and professional interests, ensuring you stay updated and connected.   
           </p>
      </div>
      <div className="footer-section2">
        <h3>QUICK LINKS</h3>
        <ul>
          <a href='/'>
          <li>All Conference Alert</li> </a>
          <a href='/'>
          <li>International Conferences</li></a>
          <a href='/'>
          <li>International Conference Alerts</li></a>
          <a href='/'>
          <li>Conference Alerts</li></a>
        </ul>
      </div>
      <div className="footer-section ">
        <h3>QUICK LINKS</h3>
        <ul>
          <a href='/'>
          <li>Home</li>
          </a>
          <a href='/ScientificEvents'>
          <li>Scientific Events</li>
          </a>
          
          <a href='/Journals'>
            <li>Journals</li></a>
          <a href='/PrivacyPolicy'>
            <li>Privacy Policy</li></a>
          <a href='/AddEvents'>
            <li>Add Event</li></a>
          <a href='/Faq'>
            <li>FAQ</li></a>
        </ul>
      </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
