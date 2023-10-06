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
          Experience: React, Spring Boot, AWS (EC2, S3, RDS), Java, MySQL, Bootstrap, Node, Express, Axios, CRUD, Postman
        </p>

        <section className="skills-cards">

          <div className="skills-card">
            <div className="skills-card-image">
              <FaReact className="react-icon" />
            </div>
            <div className="skills-card-text">
              <h3>React UX/UI Design</h3>
              <p> I have multiple fullstack projects in React and created
                this website with React
              </p>
            </div>
          </div>

          <div className="skills-card">
            <img className="skills-card-image" src= {fullStack} alt="full stack icon" />
            <div className="skills-card-text">
              <h3>Full Stack Development</h3>
              <p>
                I created a CRUD application using Spring Boot, React, MySQL, Postman, Axios and a
                Flight Reservation App that uses JS, Node, Express, SQLite, REST APIs
              </p>
            </div>
          </div>

          <div className="skills-card">
            <img className="skills-card-image" src={java} alt="java logo"></img>
            <div className="skills-card-text">
              <h3>Java</h3>
              <p>I have multiple projects using Spring Boot/Spring and
                took most of my courses at the University of Washington in Java
                (DSA, Programming fundamentals)
              </p>
            </div>
          </div>
        </section>
      </section>
  )

}

export default Skills;