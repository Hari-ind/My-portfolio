import React from "react";
import "./project.css";
import { BiLinkExternal } from "react-icons/bi";
import { RiGithubFill } from "react-icons/ri";

function Project() {
  return (
    <div className="project">
      <img
        className="p-img"
        src="https://soumyajit.tech/static/media/chatify.9373edda.png"
        alt="Avatar"
      />

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
        <a target="_blank">
          <BiLinkExternal />
        </a>
        <a>
          <RiGithubFill />
        </a>
      </div>
    </div>
  );
}

export default Project;
