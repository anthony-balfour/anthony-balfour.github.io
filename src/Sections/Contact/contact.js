import React from 'react';
import './contact.css';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

 const Contact = () => {
  return (
    <div className="contact-container">
    <section id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">Send me a message, let's do something awesome together!</p>
      <form className="contact-form">
        <input type="text" className="contact-name" placeholder="Your Name" />
        <input type="email" className="contact-email" placeholder='Your Email' />
        <textarea name="message" className="contact-message" rows="5" placeholder='Your Message'></textarea>
        <button className="contact-submit" type="submit" value='Send'>Submit</button>
        <div className="contact-links">
          <a href="https://github.com/anthony-balfour"><img className="contact-icon" src={github} alt="github icon" /></a>
          <a href="https://www.linkedin.com/in/anthonybalfourjr/"><img className="contact-icon" src={linkedin} alt ="linekdin icon" /></a>
        </div>

      </form>
    </section>
    </div>
  )
}

export default Contact;