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
              <p> Implemented AWS CloudFront and S3 architecture for multiple TV apps. I have multiple
                personal projects using EC2, RDS, and S3, ACM, and CloudFront.
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
                I had experience with a Typescript/React interactive TV app and developed
                a scaled front end interactive TV app within a 3rd party framework for ATSC 3.0. I have multiple full stack projects including a
                flight reservation App which implements designed RESTful API's in Node interfaced with JavaScript front end and a MySQL database.
              </p>
            </div>
          </div>

          <div className="skills-card">
          <img className="skills-card-image" src= {fullStack} alt="full stack icon" />
            <div className="skills-card-text">
              <h3>CI/CD with Terraform </h3>
              <p> I set up AWS resources in Terraform @ Sinclair using Terraform. I developed an app
                using Gitlab pipelines and contributed heavily to the INT/QA development of that app.
              </p>
            </div>
          </div>
        </section>
      </section>
  )

}

export default Skills;