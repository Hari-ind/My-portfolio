import React from "react";
import "./project.css";
import { BiLinkExternal } from "react-icons/bi";
import { RiGithubFill } from "react-icons/ri";
import image from "../Assets/aq.PNG";

function Project() {
  return (
    <div className="project">
      <img className="p-img" src={image} alt="Avatar" />

      <div className="project-title">
        <h3>Private chat </h3>
        <p>
          How is this helpful? Well, it shows you the anagrams of i'twxt
          scrambled in different ways and helps you recognize the set of letters
          more easily. It will help you the next time these letters, I ' T W X T
          come up in a word scramble game.
        </p>
      </div>
      <div className="project-links">
        <a href="http://google.com">
          <BiLinkExternal />
        </a>
        <a href="http://google.com">
          <RiGithubFill />
        </a>
      </div>
    </div>
  );
}

export default Project;
