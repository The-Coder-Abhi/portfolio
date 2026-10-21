import React from "react";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAndroid,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaHashtag
//   FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiKotlin,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiAppwrite,
  SiObsstudio,
  SiCplusplus,
} from "react-icons/si";
import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="category-icon" />,
    skills: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Angular", icon: <FaAngular color="#DD0031" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "HTML5 / CSS3", icon: <FaHtml5 color="#E34F26" /> },
    ],
  },
  {
    title: "Backend & APIs",
    icon: <FaNodeJs className="category-icon" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    //   { name: "Express.js", icon: <SiExpress color="#FFFFFF" /> },
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "C++", icon: <SiCplusplus color="#00599C" /> },
      { name: "C#", icon: <FaHashtag color="#239120" />},
    ],
  },
  {
    title: "Mobile Development",
    icon: <FaAndroid className="category-icon" />,
    skills: [
      { name: "Kotlin", icon: <SiKotlin color="#7F52FF" /> },
      { name: "Android SDK", icon: <FaAndroid color="#3DDC84" /> },
      { name: "Jetpack Compose", icon: <FaAndroid color="#3DDC84" /> },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: <SiPostgresql className="category-icon" />,
    skills: [
    //   { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "Appwrite", icon: <SiAppwrite color="#F02E65" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <FaGithub className="category-icon" />,
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="#FFFFFF" /> },
      { name: "OBS Studio", icon: <SiObsstudio color="#FFFFFF" /> },
      { name: "Machine Learning", icon: <FaPython color="#3776AB" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <h3 className="section-subtitle">EXPERTISE</h3>
        <h2 className="section-title">
          Technical <span className="highlight">Skills Matrix</span>
        </h2>
        <p className="section-description">
          A comprehensive overview of my technical stack, categorized by domain.
          I specialize in building robust full-stack web applications and native
          Android ecosystems.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-card-header">
              {category.icon}
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            <div className="skill-list">
                {category.skills.map((skill,idx)=>(
                    <div className="skill-item" key={idx}>
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill name">{skill.name}</span>
                    </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
