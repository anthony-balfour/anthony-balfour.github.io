import React from 'react'
import "./about.css";
import headShot from "../../assets/dinner.jpg";

export const About = () => {
  return (
    <section id="about">
      <h2 className="about-title">About Me</h2>
      <img className="head-shot" src={headShot} alt="Anthony Balfour head shot" />
      <div className="about-description-container">
        <p className="about-description">
        {/* I was born in Seattle and have lived here most of my life. For fun I do boxing, jiu-jitsu, tennis, and read. I am currently reading the Dune series (God Emperor of Dune). I love watching anime!
         One piece is a favorite and Beach House is one of my favorite music bands. */}
         I graduated from the University of Washington in 2023 with courses in Full Stack Web Development, Data Structures and Algorithms, and Java! I've continued learning through projects since graduating
         by creating two Full Stack React/Spring Boot User Management Apps, and deploying those apps and previous ones with Docker and AWS. I am currently learning Terraform! Thanks
        </p>
      </div>
    </section>
  )
}

export default About