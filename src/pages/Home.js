import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div>
        <Header></Header>
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./intro-bg.svg')` }}
      >
        <div>
          <h1>MAFTUN HASHIMLI</h1>

          <div className="intro-content d-flex justify-content-between">
            <p>Software Developer</p>
            <button className="primary-button font-bold w-50">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
