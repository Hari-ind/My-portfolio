import React from "react";
import "./skills.css";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJavascript1,
  DiGit,
  DiJava,
} from "react-icons/di";
function Skills() {
  return (
    <div className="section skills" id="Skills">
      <h1 className="header">Skills </h1>

      <ul className="a-ul">
        <li className="a-li">
          <DiHtml5 />
        </li>
        <li className="a-li">
          <DiCss3 />
        </li>
        <li className="a-li">
          <DiJavascript1 />
        </li>
        <li className="a-li">
          <DiReact />
        </li>
        <li className="a-li">
          <DiJava />
        </li>
        <li className="a-li">
          <DiGit />
        </li>
        <li className="a-li">
          <DiGit />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
