import React from "react";
import "./home.css";
import homesvg from "../Assets/home.svg";
import Type from "./Type";

function Home() {
  return (
    <div className="home section">
      <div className="home-left">
        <h1 className="heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h1 className="Heading">
          {" "}
          I'M <span>HARI KRISHNA </span>
        </h1>
        <br />
        <h2>
          <Type />
        </h2>
      </div>
      <div className="home-right">
        <img className="home-img" src={homesvg} alt="home pic" />
      </div>
    </div>
  );
}

export default Home;
