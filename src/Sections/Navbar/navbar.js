/**
 * This is the Navbar component. It contains a logo to the top left, menu links
 * to projects section, home, about, and contact.
 * Contains social links to LinekdIn and Github and a let's connect button
 *
 */

import React from 'react'
import {useState} from 'react';
import './navbar.css'

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Using React Icons package
import  { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

// Link is used for SPA smooth scrolling and has different utility than Link with React Router
import { Link } from 'react-scroll';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  function changeMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav id="navbar">
      <p>Anthony Balfour</p>
      <section id="desktop-menu">
        <section id="menu-links">
          <Link activeClass="active-link" spy={true} className="desktop-menu-link" to="intro" smooth="true" duration={500}>Home</Link>
          <Link activeClass="active-link" className="desktop-menu-link" to="skills" spy={true} smooth = {true} duration = {500} offset={-50}>Skills</Link>
          <Link activeClass="active-link" className="desktop-menu-link" to="projects" spy={true} smooth={true} duration ={600} offset={-100}>Projects</Link>
          <Link activeClass="active-link" className="desktop-menu-link" spy={true} to="about" smooth={true} duration = {600}>About</Link>
        </section>
        <section id="social-links">
          <a href="https://www.linkedin.com/in/anthonybalfourjr/">
            <FontAwesomeIcon icon={faLinkedin} id="linked-in" className="social-link"/>
          </a>
          <a href="https://github.com/anthony-balfour">
            <FontAwesomeIcon icon={faGithub} id ="github" className="social-link"/>
          </a>
        </section>
        <Link to="contact" smooth={true} duration={600}><button>Let's Connect</button></Link>
      </section>
      <BiMenu className={showMenu ? "hamburger-hide" : "hamburger"} onClick={changeMenu}/>
      <section id="mobile-menu" className={showMenu ? "mobile-menu-open" : "mobile-menu-close"}>
            <AiOutlineClose id="mobile-close-x" onClick={changeMenu} />
            <Link  className="mobile-menu-link" spy={true} to="intro" smooth="true" duration={500} onClick={changeMenu} >Home</Link>
            <Link  className="mobile-menu-link" to="skills" spy={true} smooth = {true} duration = {500} offset={-50} onClick={changeMenu}>Skills</Link>
            <Link  className="mobile-menu-link" to="projects" spy={true} smooth={true} duration ={600} offset={-100} onClick={changeMenu}>Projects</Link>
            <Link activeClass="active-link" className="desktop-menu-link" spy={true} to="about" smooth={true} duration = {600}>About</Link>
            <Link  className="mobile-menu-link" spy={true} to="contact" smooth={true} duration ={600} onClick={changeMenu}>Contact</Link>
      </section>
    </nav>
  )
}

export default Navbar