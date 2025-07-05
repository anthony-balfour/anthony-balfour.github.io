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
          React, TypeScript, Node, Java, MySQL, AWS Solutions Architect, DynamoDB, REST, Scrum
        </p>

        <section className="skills-cards">

        <div className="skills-card">
            <img id="aws" className="skills-card-image" src={aws} alt="aws logo"></img>
            <div className="skills-card-text">
              <h3>AWS</h3>
              <p> I have work project experience with Lambda, EC2, S3, CloudFront, EventBridge, DynamoDB, & more
                {/* These projects are linked in the <Link className="projects-link" to="projects" spy={true} smooth = {true} duration = {500}> projects</Link> section. */}
              </p>
            </div>
        </div>

        <div className="skills-card">
             <div className="skills-card-image">
              <FaReact className="react-icon" />
            </div>
            <div className="skills-card-text">
              <h3>Front-End Development</h3>
              <p>
                I've led multiple full stack live TV web app projects deployed to over 150+ TV stations
                developed in React, TypeScript, Node, and AWS driving savings of over $900K+
              </p>
            </div>
          </div>

          <div className="skills-card">
          <img className="skills-card-image" src= {fullStack} alt="full stack icon" />
            <div className="skills-card-text">
              <h3>CI/CD with GitLab and Terraform </h3>
              <p> I highly optimized GitLab CI/CD pipelines using bash scripts, Terraform, and AWS commands
              </p>
            </div>
          </div>
        </section>
      </section>
  )

}

export default Skills;