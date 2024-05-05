// This contains the about section content as the second interface panel
// as the user scrolls down. It contains 3 main brackets of about me


import React from "react";
import "./skills.css";

// About Cards icon imports
import { FaReact } from 'react-icons/fa';

import fullStack from "../../assets/full-stack.png";
import aws from "../../assets/aws.svg";
import { Link } from 'react-scroll';

const Skills = () => {
  return (
      <section id="skills">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">
          React, TypeScript, Node, Java, MySQL, Spring Boot, AWS Infrastructure, Docker, Scrum
        </p>

        <section className="skills-cards">

        <div className="skills-card">
            <img id="aws" className="skills-card-image" src={aws} alt="aws logo"></img>
            <div className="skills-card-text">
              <h3>AWS</h3>
              <p> Implented a static front-end with CloudFront and S3 as an intern. I am currently
                studying for the AWS Certified Solutions Architect (SAA-C03) and have multiple personal
                projects using EC2, RDS, and S3.
                {/* These projects are linked in the <Link className="projects-link" to="projects" spy={true} smooth = {true} duration = {500}> projects</Link> section. */}
              </p>
            </div>
        </div>

        <div className="skills-card">
            <img className="skills-card-image" src= {fullStack} alt="full stack icon" />
            <div className="skills-card-text">
              <h3>Full Stack Development</h3>
              <p>
                Created a Flight Reservation App which implements designed RESTful API's in Node interfaced with JavaScript front end and a SQLite database. Also,
                two user management full stack apps in which users can be created, read, updated, and deleted.
              </p>
            </div>
          </div>

          <div className="skills-card">
            <div className="skills-card-image">
              <FaReact className="react-icon" />
            </div>
            <div className="skills-card-text">
              <h3>React </h3>
              <p> Worked on a React/TypeScript Emergency Alerts OTT App as an intern.
                I've created multiple personal projects with React.
              </p>
            </div>
          </div>
        </section>
      </section>
  )

}

export default Skills;