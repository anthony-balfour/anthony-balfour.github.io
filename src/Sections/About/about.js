// This contains the about section content as the second interface panel
// as the user scrolls down. It contains 3 main brackets of about me


import React from "react";
import "./about.css";

// About Cards icon imports
import { FaReact } from 'react-icons/fa';
import fullStack from "../../assets/full-stack.png";
import java from "../../assets/java.png";
const About = () => {
  return (
      <section id="about">
        <h2 className="about-title">Skills</h2>
        <p className="about-description">
          I am a passionate web designer that loves learning about
          new technologies with experience in UI/UX design, full stack applications, and REST API's.
          I am proficient in React, Javascript, Java, CSS, HTML, Node, and SQL
        </p>

        <section className="about-cards">

          <div className="about-card">
            <div className="about-card-image">
              <FaReact className="react-icon" />
            </div>
            <div className="about-card-text">
              <h3>React UX/UI Design</h3>
              <p>This website was created with React. I have multiple projects in JS;
                all implementing mobile-responsiveness and web design fundamentals
              </p>
            </div>
          </div>

          <div className="about-card">
            <img className="about-card-image" src= {fullStack} alt="full stack icon" />
            <div className="about-card-text">
              <h3>Full Stack Development</h3>
              <p>
                Created a flight reservation full stack app that uses Node, Express, SQLite, REST APIs, and JSON
              </p>
            </div>
          </div>

          <div className="about-card">
            <img className="about-card-image" src={java} alt="java logo"></img>
            <div className="about-card-text">
              <h3>Java</h3>
              <p>I took the programming series in Java and Data Structures and Algorithhms in Java at the University of Washington completing many mini projects
                throughout.
              </p>
            </div>
          </div>
        </section>
      </section>
  )

}

export default About;