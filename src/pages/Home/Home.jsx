import React from 'react'
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Contact from '../../components/Contact/Contact';
import Certifications from '../../components/Certifications/Certifications';

const Home = () => {
  return (
    <div className="home-page-wrapper">
        <Hero/>
        <Projects/>
        <Skills/>
        <Certifications/>
        <Contact/>
    </div>
  )
}

export default Home
