import React from 'react'
import "./about.css";
import headShot from "../../assets/dinner.jpg";

export const About = () => {
  return (
    <section id="about">
      <h2 className="about-title">About Me</h2>
      <img className="head-shot" src={headShot} alt="Anthony Balfour head shot" />
      <p className="about-description">
        I was born in Seattle and have lived here most of my life. For fun I do boxing, jiu-jitsu, tennis, read, and I love watching anime!
        I am currently reading the Dune series (God Emperor of Dune). One piece is a favorite anime. Beach house is one of my favorite music bands.

      </p>
    </section>
  )
}

export default About