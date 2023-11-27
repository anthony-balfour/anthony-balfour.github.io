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
          Experience: React, Spring Boot, AWS (EC2, S3, RDS), Java, MySQL, Bootstrap, Node, Express, Mobile-Responsiveness, CSS, Axios, Postman
        </p>

        <section className="skills-cards">

        <div className="skills-card">
            <img className="skills-card-image" src= {fullStack} alt="full stack icon" />
            <div className="skills-card-text">
              <h3>Full Stack Development</h3>
              <p>
                I created a Flight Reservation App which implements designed API's, simple user auth, and database management. I created
                two simple CRUD applications using Spring Boot, React, MySQL, Bootstrap, Material UI, Postman, and Axios.
              </p>
            </div>
          </div>

          <div className="skills-card">
            <img id="aws" className="skills-card-image" src={aws} alt="aws logo"></img>
            <div className="skills-card-text">
              <h3>AWS</h3>
              <p> I have hosted 4 apps with the AWS using the console and EC2, RDS, S3 and Elastic Beanstalk. Two of the apps utilize Docker.
                These projects are linked in the <Link className="projects-link" to="projects" spy={true} smooth = {true} duration = {500}> projects</Link> section. I am currently learning Terraform.
              </p>
            </div>
          </div>

          <div className="skills-card">
            <div className="skills-card-image">
              <FaReact className="react-icon" />
            </div>
            <div className="skills-card-text">
              <h3>React </h3>
              <p> I have multiple fullstack projects in React use Bootstrap, Material UI, and mobile responsiveness; this website was made with React.
              </p>
            </div>
          </div>
        </section>
      </section>
  )

}

export default Skills;