import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setscrolled] = useState(false);

  //Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  //Handle scroll effect for glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
        // console.log("Current Scroll Y:", window.scrollY);
      if (window.scrollY > 50) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        {/* Logo Section */}
        <a href="#home" className="nav-logo">
          <span className="logo-icon">AS</span>
          <span className="logo-text">Abhishek Shelar</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>

          {/* Mobile-only Resume Button */}
          <li className="mobile-resume">
            {/* Replace href with the actual path to your PDF in the public folder */}
            <a
              href="/Abhishek_Shelar_Full_Stack_Developer.pdf"
              download
              className="btn-download"
            >
              <FaDownload /> Download Resume
            </a>
          </li>
        </ul>

        {/* Desktop Resume Button */}
        <div className="nav-right">
          <a
            href="/Abhishek_Shelar_Full_Stack_Developer.pdf"
            download
            className="btn-download desktop-resume"
          >
            <FaDownload /> Download Resume
          </a>

          {/* Hamburger Menu Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
