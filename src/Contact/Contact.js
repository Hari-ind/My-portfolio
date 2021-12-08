import React from "react";
import "./contact.css";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div className="container section">
      <div className="c-left">
        <form name="contact" method="POST" data-netlify="true" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="fname">
            Name:
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your name"
            />
          </label>
          <label htmlFor="email">
            Email Address:
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
          </label>
          <label htmlFor="message">
            Message:
            <textarea
              name="message"
              id="subject"
              placeholder="Enter your message"
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="c-right">
        <h1 className="header">Contact Information</h1>
        <div className="ci-top">
          <p>Email: jonnadulaharikrishna@gmail.com</p>
          <p>PH no: +91 9494123368</p>
        </div>
        <br />
        <div className="ci-bottom">
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
}

export default Contact;
