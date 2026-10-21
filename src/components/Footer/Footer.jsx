import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Left: Brand Identity */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={scrollToTop}>
              <span className="logo-icon">AS</span>
              <div className="logo-text-wrapper">
                <span className="logo-text">Abhishek Shelar</span>
                <span className="logo-subtext">Software Engineer</span>
              </div>
            </a>
          </div>

          {/* Center: Quote */}
          <div className="footer-quote">
            <p>"Turning ideas into real-world applications, one line at a time."</p>
          </div>

          {/* Right: Social Links & Up Button */}
          <div className="footer-socials">
            <a href="https://github.com/The-Coder-Abhi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/abhishek-shelar-37a262259" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:abhishekshelar2003@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            {/* Optional: Add Twitter/Instagram if you use them professionally */}
            {/* <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
            
            <a href="#home" className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
              <FaArrowUp />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Abhishek Shelar. All rights reserved.</p>
          <p className="footer-built-with">
            Built with <FaHeart className="heart-icon" /> using React & Custom CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
