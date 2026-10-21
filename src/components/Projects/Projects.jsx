import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import VerseView from "../../img/VerseView-BroadCasting.png"
import ChatZone_Web from "../../img/ChatZone-Web.jpeg"
import NotesLib_Web from "../../img/NotesLib-Web.png"
import ChatZone from "../../img/ChatZone-App.png"
import NotesLib from "../../img/NotesLib-App.png"
import FinBowl from "../../img/FinBowl.png"
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "VerseView Broadcasting Bridge",
    description: "A real-time data bridge scraping live presentation data with 101.2ms synchronization. Features an auto-scaling React frontend and custom lower-thirds overlays optimized for OBS.",
    tech: ["Node.js", "React", "Firebase", "OBS"],
    githubUrl: "https://github.com/The-Coder-Abhi/fga-verse-broadcasting",
    liveUrl: "https://the-coder-abhi.github.io/fga-verse-broadcasting/",
    image: VerseView, // Make sure this is imported at the top
  },
  {
    id: 2,
    title: "NotesLib Web Platform",
    description: "A comprehensive document management platform featuring a deep 5-level hierarchy system, an in-app PDF viewer, and custom interactive modals. Engineered with smart access controls and automated CI/CD deployment.",
    tech: ["Angular", "Appwrite", "CI/CD"],
    githubUrl: "https://github.com/The-Coder-Abhi/noteslib-web-app",
    liveUrl: "https://the-coder-abhi.github.io/noteslib-web-app/home",
    image: NotesLib_Web, // Add this image import
  },
  {
    id: 3,
    title: "NotesLib Mobile App",
    description: "A scalable academic organization application built with a reactive UI architecture. Achieved a highly responsive cold-start load time of 959.8ms seamlessly backed by Appwrite BaaS.",
    tech: ["Kotlin", "Jetpack Compose", "Appwrite"],
    githubUrl: "https://github.com/The-Coder-Abhi/NotesLib_AppWrite",
    liveUrl: "https://github.com/The-Coder-Abhi/NotesLib_AppWrite",
    image: NotesLib, // Add this image import
  },
  {
    id: 4,
    title: "ChatZone Web",
    description: "A fully responsive web version of the ChatZone messaging platform. Powered by React and Firebase for robust real-time cross-platform message syncing and Cloudinary for streamlined media management.",
    tech: ["React.js", "Firebase", "Cloudinary"],
    githubUrl: "https://github.com/The-Coder-Abhi/ChatZone_WebApp",
    liveUrl: "https://the-coder-abhi.github.io/ChatZone_WebApp/",
    image: ChatZone_Web, // Add this image import
  },
  {
    id: 5,
    title: "ChatZone Android",
    description: "A secure native messaging application prioritizing child safety. Engineered with email-based verification, automated parental background monitoring alerts, and a highly efficient 320ms message synchronization speed.",
    tech: ["Java", "XML", "Firebase"],
    githubUrl: "https://github.com/The-Coder-Abhi/ChatZone_New",
    liveUrl: "https://github.com/The-Coder-Abhi/ChatZone_New",
    image: ChatZone, // Add this image import
  },
  {
    id: 6,
    title: "FinBowl Dashboard",
    description: "A responsive fintech web application designed to manage complex financial operations. Optimized for heavy datasets with interactive data tables, sticky UI architectures, and global state management via Context API.",
    tech: ["React.js", "React Router", "Context API"],
    githubUrl: "https://github.com/The-Coder-Abhi/fin-bowl",
    liveUrl: "https://the-coder-abhi.github.io/fin-bowl/#/rms/disbursement",
    image: FinBowl, // Add this image import
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h3 className="section-subtitle">MY WORK</h3>
        <h2 className="section-title">
          Featured <span className="highlight">Projects</span>
        </h2>
        <p className="section-description">
          A selection of my recent full-stack and mobile applications. Each
          project demonstrates my focus on clean architecture, real-time
          synchronization, and scalable backends.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              {/* Fallback styling applied if image isn't loaded yet */}
              <div className="image-overlay"></div>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-details">{project.description}</p>

              <div className="project-tech-stack">
                {project.tech.map((tag, index) => (
                  <span className="project-tech-tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <FaExternalLinkAlt size={14} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
