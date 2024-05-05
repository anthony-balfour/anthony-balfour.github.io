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
         I graduated from the University of Washington in 2023 taking Computer Science courses in Full Stack Web Development, Data Structures and Algorithms, and Java!
        </p>
        <p className="about-description">I am a Kodely Tech Program Leader, tutoring elemntary students
        in technology (electrical circuits specifically) and am a co-founder of a nonprofit, Rainier Tech Roots, where my team
        teaches programming to local youth for free.
        </p>
      </div>
    </section>
  )
}

export default About