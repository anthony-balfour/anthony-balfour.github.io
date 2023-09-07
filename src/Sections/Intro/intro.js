/**
 * This is the main body of the landing page content for the portfolio. There is
 * a welcome message with a "lets connect" link and
 * a picture of me on the right side of the page.
 *
 */

import React from 'react'
import "./intro.css";
import portrait from "../../assets/self-photo.jpg";
/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <>
    <section id="intro">
      <section>
        <p id="hello">Hello</p>
        <p className="intro-text">I'm<span id="introName">Anthony</span></p>
        <p className="intro-text">Website Developer</p>
        <p id="introParagraph">Highly motivated web developer with a passion for learning and creating beautiful, user-friendly
          websites
        </p>
        <Link id="intro-connect">
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

