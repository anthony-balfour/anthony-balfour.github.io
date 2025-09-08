import React, { useRef } from 'react';
import './contact.css';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

//Email.js
import emailjs from '@emailjs/browser';

 const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a04ol8h', 'template_70d3dnk', form.current, 'sI8rkMrdCFIX5kopR')
      .then((result) => {
        console.log(result.text);
        let response = document.querySelector(".email-response");
        console.log(response);
        if (response.classList.contains("hidden")) {
          response.classList.remove("hidden");
        };
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className="contact-container">
    <section id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">Feel free to send a message!</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" className="contact-name" placeholder="Your Name" name="your_name" />
        <input type="email" className="contact-email" placeholder='Your Email' name="your_email" />
        <textarea name="message" className="contact-message" rows="5" placeholder='Your Message'></textarea>
        <button className="contact-submit" type="submit" value='Send'>Submit</button>
        <p className="email-response hidden">Thanks for the e-mail! Talk to you soon</p>
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