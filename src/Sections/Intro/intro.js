/**
 * This is the main body of the landing page content for the portfolio. There is
 * a welcome message with a "lets connect" link and
 * a picture of me on the right side of the page.
 *
 */

import React from 'react'
import "./intro.css";
import portrait from "../../assets/self-photo-fullbody3.png";
/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <>
    <section id="intro">
      <section id="intro-content">
        <p id="hello">Hi!</p>
        <p className="intro-text">I'm <span id="introName">Anthony</span></p>
        <span className="intro-text" id="web-dev">FullStack Developer</span>
        <p className="intro-paragraph">I have experience in full stack applications, AWS deployment, UI/UX design, web development, REST API's,
          and database management.
          Tools: React, Spring Boot, AWS (EC2, S3, RDS), Java, MySQL, Bootstrap, Node, Express, Axios, CRUD </p>
        {/* <p className="intro-paragraph">(and using pictures with ghost hands)</p> */}

        <Link id="intro-connect" to="contact" smooth={true} duration={600}>
          <span>Let's Connect</span>
          <FontAwesomeIcon icon = {faCircleArrowRight} id="right-arrow"></FontAwesomeIcon>
        </Link>
      </section>

      <aside>
        <figure>
          <img src= {portrait} alt="headshot of Anthony" id='portrait'></img>
        </figure>
      </aside>
    </section>
    </>
  )
}

export default Intro;

