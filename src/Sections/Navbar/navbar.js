/**
 * This is the Navbar component. It contains a logo to the top left, menu links
 * to projects section, home, about, and contact.
 * Contains social links to LinekdIn and Github and a let's connect button
 *
 */

import React from 'react'
import './navbar.css'

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Link is used for SPA smooth scrolling and has different utility than Link with React Router
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav id="navbar">
      <p>Anthony Balfour</p>
      <section id="desktop-menu">
        <section id="menu-links">
        <Link className="desktop-menu-link">Home</Link>
        <Link className="desktop-menu-link">Projects</Link>
        <Link className="desktop-menu-link">About</Link>
        <Link className="desktop-menu-link">Contact</Link>
        </section>
        <section id="social-links">
          <a href="https://www.linkedin.com/in/anthonybalfourjr/">
            <FontAwesomeIcon icon={faLinkedin} id="linked-in" className="social-link"/>
          </a>
          <a href="https://github.com/anthony-balfour?tab=repositories">
            <FontAwesomeIcon icon={faGithub} id ="github" className="social-link"/>
          </a>
        </section>
        <button>Let's Connect</button>
      </section>
    </nav>
  )
}

export default Navbar