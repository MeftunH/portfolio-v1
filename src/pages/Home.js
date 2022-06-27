import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
function Home() {
  return (
    <div>
      <Header></Header>
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./intro-bg.svg')` }}
      >
        <div>
          <h1 data-aos="fade-up">MAFTUN HASHIMLI</h1>

          <div className="intro-content d-flex justify-content-between">
            <p>Software Engineer</p>
            <button className="primary-button font-bold">Get Started</button>
          </div>
        </div>
      </div>
      <Carousel></Carousel>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,96L16,90.7C32,85,64,75,96,106.7C128,139,160,213,192,229.3C224,245,256,203,288,165.3C320,128,352,96,384,117.3C416,139,448,213,480,229.3C512,245,544,203,576,202.7C608,203,640,245,672,224C704,203,736,117,768,80C800,43,832,53,864,101.3C896,149,928,235,960,234.7C992,235,1024,149,1056,112C1088,75,1120,85,1152,90.7C1184,96,1216,96,1248,122.7C1280,149,1312,203,1344,202.7C1376,203,1408,149,1424,122.7L1440,96L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box-interest-intro p-5 font-bold" data-aos="fade-right">
              <h1>Topics that interest me</h1>
              <br></br>
              <p>Data Structures And Algorithms</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img
                src="./assets/ds_icon.png"
                alt="ds icon"
                height="200"
                className="w-100"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box-interest-intro px-3 py-4 font-bold" data-aos="fade-left">
              <p>
                A data structure is a specialized format for organizing,
                processing, retrieving and storing data. There are several basic
                and advanced types of data structures, all designed to arrange
                data to suit a specific purpose. Data structures make it easy
                for users to access and work with the data they need in
                appropriate ways.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box-interest-intro p-5 font-bold" data-aos="fade-right">
              <h1>Topics that interest me</h1>
              <br></br>
              <p className="interest-concept-p">Clean code concepts</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img
                src="./assets/clean_code_icon.png"
                alt="ds icon"
                height="200"
                className="w-100"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box-interest-intro px-3 py-4 font-bold" data-aos="fade-left">
              <p>
                {" "}
                Clean code is code that is easy to understand and easy to
                change.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box-interest-intro p-5 font-bold" data-aos="fade-right">
              <h1>Topics that interest me</h1>
              <br></br>
              <p>Design Patterns</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img
                src="./assets/dp_logo.png"
                alt="ds icon"
                height="200"
                className="w-100"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box-interest-intro px-3 py-4 font-bold" data-aos="fade-left">
              <p>
                In software engineering, a design pattern is a general
                repeatable solution to a commonly occurring problem in software
                design. A design pattern isn't a finished design that can be
                transformed directly into code. It is a description or template
                for how to solve a problem that can be used in many different
                situations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box-interest-intro p-5 font-bold" data-aos="fade-right">
              <h1>Topics that interest me</h1>
              <br></br>
              <p>Microservice architecture</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img
                src="./assets/ms_icon.png"
                alt="ds icon"
                height="200"
                className="w-100"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box-interest-intro px-3 py-4 font-bold" data-aos="fade-left">
              <p>
                {" "}
                Micro Service is an architecture that allows the developers to
                develop and deploy services independently. Each service running
                has its own process and this achieves the lightweight model to
                support business applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="devstack container my-5 n-box-interest-intro py-5">
        <div className="text-center">
        <h3 className="font-bold text-center">My Development Stack</h3>
        <hr></hr>
        <img src="./assets/developer.png" alt="" height='200' width='200' className="text-center"></img>
        </div>
        <div className="row">
          <div className="col-md-4">
         <div className="font-bold">
          <h3 className="font-bold"> Front End</h3>
          <hr></hr>
          <p>HTML/CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Vue</p>
          <p>Scss</p>
         </div>
          </div>

          <div className="col-md-4">
         <div className="font-bold text-center">
          <h3 className="font-bold"> UI/UX </h3>
          <hr></hr>
          <p>Material UI</p>
          <p>Bootstrap</p>
          <p>AntDesign</p>
          <p>Semantic UI</p>
          <p>Tailwind CSS</p>
          <p>Canvas</p>
          <p>Figma</p>
         </div>
          </div>

          <div className="col-md-4">
         <div className="font-bold text-center">
          <h3 className="font-bold"> Backend/DB </h3>
          <hr></hr>
          <p>Java</p>
          <p>Node JS</p>
          <p>Php</p>
          <p>C#</p>
          <p>Spring</p>
          <p>Spring Boot</p>
          <p>Express</p>
          <p>Laravel</p>
          <p>MSSQL</p>
          <p>My Sql</p>
          <p>Postgres SQL</p>
          <p>Firebase</p>
          <p>MongoDB</p>
         </div>
          </div>

          <div className="col-md-4">
         <div className="font-bold text-right">
          <h3 className="font-bold"> Mobile </h3>
          <hr></hr>
          <p>React Native</p>
          <p>Kotlin</p>
          <p>Jetpack Compose</p>
         </div>
         </div>


          <div className="col-md-4">
         <div className="font-bold text-right">
          <h3 className="font-bold"> Concepts </h3>
          <hr></hr>
          <p>Clean Code</p>
          <p>Unit and Integration Testing (Junit/Mockito/Jest/PhpUnit)</p>
          <p>Algorithms</p>
          <p>Data Structures</p>
          <p>Code Optimization</p>
          <p>Design Patterns</p>
          <p>DRY</p>
          <p>KISS</p>
         </div>
         </div>

         <div className="col-md-4">
         <div className="font-bold text-right">
          <h3 className="font-bold"> In Progress </h3>
          <hr></hr>
          <p>Microservice Architecture</p>
          <p>Spring Cloud</p>
          <p>Spring Batch</p>
          <p>Spring Web-Flow</p>
          <p>Kafka</p>
          <p>Docker</p>
          <p>Kubernetes</p>
         </div>
         </div>


        </div>
      </div>
      <div>
        <h3 className="font-bold text-center py-3">Who Am I</h3>
      <div className="who-am-i flex-with-center" style={{backgroundImage:`url('/assets/who-am-i.svg')`}}>
      <div>
        <h3>I'm</h3>
        <hr></hr>
        <p><pre>{JSON.stringify({
          "name": "Maftun Hashimli",
          "nationality": "Azerbaijani",
          "living in":"Turkey",
          "birthDate": "29-11-2001",
          "gender":"Male",
        },null,2)}</pre></p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
