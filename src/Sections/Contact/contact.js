import React from 'react';
import './contact.css';

 const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">Send me a message, let's do something awesome together!</p>
      <form className="contact-form">
        <input type="text" className="contact-name" placeholder="Your Name" />
        <input type="email" className="contact-email" placeholder='Your Email' />
        <textarea name="message" className="contact-message" rows="5" placeholder='Your Message'></textarea>
        <button className="contact-submit" type="submit" value='Send'>Submit</button>
        <div className="contact-links">

        </div>

      </form>
    </section>
  )
}

export default Contact;