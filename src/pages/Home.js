import React from "react";
import Header from "../components/Header";
import Carousel  from "../components/Carousel";
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
            <p>Software Engineer</p>
            <button className="primary-button font-bold">Get Started</button>
          </div>

        </div>

      </div>
      <Carousel></Carousel>

    </div>
  );
}

export default Home;
