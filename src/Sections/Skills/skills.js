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
          Experience: React, Java, MySQL, Node, Express, Spring Boot, AWS (EC2, S3, RDS), Docker, Mobile-Responsiveness, CSS
        </p>

        <section className="skills-cards">

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
            <img id="aws" className="skills-card-image" src={aws} alt="aws logo"></img>
            <div className="skills-card-text">
              <h3>AWS</h3>
              <p> Hosted 5 apps with the AWS Console, EC2, RDS, S3 and Elastic Beanstalk. Two of the apps are containerized with Docker. I am currently learning Terraform.
                {/* These projects are linked in the <Link className="projects-link" to="projects" spy={true} smooth = {true} duration = {500}> projects</Link> section. */}
              </p>
            </div>
          </div>

          <div className="skills-card">
            <div className="skills-card-image">
              <FaReact className="react-icon" />
            </div>
            <div className="skills-card-text">
              <h3>React </h3>
              <p> Created multiple full stack projects with React and this website.
              </p>
            </div>
          </div>
        </section>
      </section>
  )

}

export default Skills;