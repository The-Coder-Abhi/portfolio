import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaArrowRight,
  FaEnvelope,
  FaAndroid,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { MdWavingHand } from "react-icons/md";
import "./Hero.css";
import ProfileImage from "../../img/abhishek-portrait.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="greeting-badge">
          <MdWavingHand style={{ marginRight: "8px", color: "#fbbf24" }} /> Hi,
          I'm
        </div>

        <h1 className="hero-title">
          Abhishek <span className="highlight">Shelar</span>
        </h1>
        <h2 className="hero-subtitle">Full-Stack Software Engineer</h2>

        <p className="hero-description">
          Independent full-stack and mobile developer specializing in building
          scalable, real-time applications. I engineer responsive React and
          Angular web platforms alongside native Android ecosystems, backed by
          robust Node.js and cloud architectures.
        </p>

        <div className="tech-stack">
          <div className="tech-badge">
            <FaReact color="#61DAFB" size={18} /> React
          </div>
          <div className="tech-badge">
            <FaNodeJs color="#339933" size={18} /> Node.js
          </div>
          <div className="tech-badge">
            <FaAndroid color="#3DDC84" size={18} /> Android
          </div>
          <div className="tech-badge">
            <SiFirebase color="#FFCA28" size={18} /> Firebase
          </div>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Projects <FaArrowRight />
          </a>
          <a href="#contact" className="btn btn-secondary">
            <FaEnvelope /> Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-visual">
        {/* Background glass frame */}
        <div className="frame-back"></div>

        {/* Glowing neon frame */}
        <div className="frame-front"></div>

        {/* Portrait */}
        <div className="image-wrapper">
          <img src={ProfileImage} alt="Abhishek Shelar - Software Engineer" />
        </div>

        {/* Floating code icon */}
        <div className="code-card">
          <span>&lt;/&gt;</span>
        </div>

        {/* Decorative text */}
        <div className="code-note">
          <span>Code</span>
          <span>Build</span>
          <span>Improve</span>
          <span>Repeat</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
