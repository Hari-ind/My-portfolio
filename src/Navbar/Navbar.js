import React from "react";

import "./navbar.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" navbar section ">
      <h3 className="logo"> HK.</h3>

      <div className="nav-list">
        <a className="nav-link" href="#Home">
          <li className="li">Home</li>
        </a>
        <a className="nav-link" href="#About">
          <li className="li">About</li>
        </a>
        <a className="nav-link" href="#Skills">
          <li className="li">Skills</li>
        </a>
        <a className="nav-link" href="#Projects">
          <li className="li">Projects</li>
        </a>
        <a className="nav-link" href="#Home">
          <li className="li">Contact</li>
        </a>
        <a className="nav-link" href="#Home">
          <li className="li">Resume</li>
        </a>
      </div>
      <div className="nav-toggle ">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="navbar-mob scale-up-center">
            <div className="nav-list-mob ">
              <a className="nav-link" href="#Home">
                <li className="li-mb">Home</li>
              </a>
              <a className="nav-link" href="#About">
                <li className="li-mb">About</li>
              </a>
              <a className="nav-link" href="#Skills">
                <li className="li-mb">Skills</li>
              </a>
              <a className="nav-link" href="#Projects">
                <li className="li-mb">Projects</li>
              </a>
              <a className="nav-link" href="#Home">
                <li className="li-mb">Contact</li>
              </a>
              <a className="nav-link" href="#Home">
                <li className="li-mb">Resume</li>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
