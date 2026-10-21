import React from 'react'
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
    const certData = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      issuer: "Udemy",
      year: "2026",
      link: "ude.my/UC-a5134f1e-04d7-427c-bb05-16f4cfb4d675" 
    },
    {
      id: 2,
      title: "Machine Learning",
      issuer: "IIT Kharagpur",
      year: "2022",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL22CS97S1322009409032462"
    }
  ];
  return (
    <section className="cert-section" id="certifications">
        <div className="cert-header">
            <h3 className="section-subtitle">CREDENTIALS</h3>
            <h2 className="section-title">Professional <span className="highlight">Certifications</span></h2>
            <p className="section-description">
                Continuous learning is a core part of my engineering journey. 
          Here are my formal credentials and specializations.
            </p>
        </div>

        <div className="cert-grid">
            {certData.map((cert) => (
                <div className="cert-card" key={cert.id}>
                    <div className="cert-icon-wrapper">
                        <FaAward className='cert-icon'/>
                    </div>

                    <div className="cert-content">
                        <h3 className="cert-title">{cert.title}</h3>
                        <div className="cert-meta">
                            <span className="cert-issuer">{cert.issuer}</span>
                            <span className="cert-dot">.</span>
                            <span className="cert-year">{cert.year}</span>
                        </div>
                    </div>

                    {cert.link !== "#" && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-verify" aria-label='Verify Certificate'>
                            <FaExternalLinkAlt/>
                        </a>
                    )}
                </div>
            ))}
        </div>
    </section>
  )
}

export default Certifications
