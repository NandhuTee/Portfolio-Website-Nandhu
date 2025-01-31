// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out for collaborations or just to say hello!</p>
      <div className="contact-info">
        <p>Email: nandhini@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/nandhini" target="_blank" rel="noopener noreferrer">linkedin.com/in/nandhini</a></p>
        <p>GitHub: <a href="https://github.com/NandhuTee" target="_blank" rel="noopener noreferrer">github.com/nandhini</a></p>
      </div>
    </div>
  );
};

export default Contact;
