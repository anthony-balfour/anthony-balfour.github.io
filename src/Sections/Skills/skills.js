// This contains the about section content as the second interface panel
// as the user scrolls down. It contains 3 main brackets of about me


import React from "react";
import "./skills.css";

// About Cards icon imports
import { FaReact } from 'react-icons/fa';
import fullStack from "../../assets/full-stack.png";
import java from "../../assets/java.png";
const Skills = () => {
  return (
      <section id="skills">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">
          I have experience in UI/UX design, full stack applications, web development, REST API's,
          and database management.
          I am proficient in React, Javascript, Java, CSS, HTML, Node, Express and SQLite
        </p>

        <section className="skills-cards">

          <div className="skills-card">
            <div className="skills-card-image">
              <FaReact className="react-icon" />
            </div>
            <div className="skills-card-text">
              <h3>React UX/UI Design</h3>
              <p>This website was created with React. All of my javascript projects
                implement mobile-responsiveness and web design fundamentals
              </p>
            </div>
          </div>

          <div className="skills-card">
            <img className="skills-card-image" src= {fullStack} alt="full stack icon" />
            <div className="skills-card-text">
              <h3>Full Stack Development</h3>
              <p>
                I created a full stack flight reservation app that uses JS, Node, Express, SQLite, REST APIs, and JSON
              </p>
            </div>
          </div>

          <div className="skills-card">
            <img className="skills-card-image" src={java} alt="java logo"></img>
            <div className="skills-card-text">
              <h3>Java</h3>
              <p>I took the programming series and Data Structures and Algorithms in Java at the University of Washington completing many projects
              </p>
            </div>
          </div>
        </section>
      </section>
  )

}

export default Skills;