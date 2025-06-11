import React from 'react';
import '../styles/contactform.css';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <label htmlFor="full-name">Full Name</label>
      <input id="full-name" type="text" placeholder="Enter your full name" />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" placeholder="Enter your email" />

      <label htmlFor="question">Ask a Question</label>
      <textarea id="question" placeholder="Type your question here..." />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
