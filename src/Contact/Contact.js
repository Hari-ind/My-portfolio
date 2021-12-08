import React from "react";
import "./contact.css";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Contact() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container section">
      <div className="c-left">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">
            {" "}
            Name:
            <input
              type="text"
              id="fname"
              value={fname}
              placeholder="Enter your name"
              onChange={(e) => setFname(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Email Address:
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="message">
            Message:
            <textarea
              id="subject"
              value={message}
              placeholder="Enter your message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <input style={{ textAlign: "center" }} type="submit" />
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
