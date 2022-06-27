import React from "react";
import Header from "../components/Header";
import coursesList from "../data/coursesData";

function Courses() {
  return (
    <div>
      <Header />
      <div
        className="courses-intro"
        style={{ backgroundImage: `url('./assets/courses-bg.svg')` }}
      >
        <div className="courses-intro-content">
          <h1>My Courses And Learnings</h1>
          <div>
            <p>Seeing is the best way to continue to improve yourself.</p>
          </div>
          <button className="primary-button">Get Started</button>
        </div>
      </div>
      <div className="motivation-parent">
        <div className="motivation  n-box flex-with-center">
          <h1>My Learning Motivation</h1>
          <div className="motivation-content">
            <p>
              Simple..
              <p>I know how to kiss..</p>
              <p>No No No.... No that kiss</p>
              <p>I know how to</p>
              <p>Keep It Straight,Simple</p>
            </p>
          </div>
        </div>
      </div>

      <div className="container courses-list mb-2">
        <h3 className="font-bold">My Courses And Lectures</h3>
        <hr></hr>
      </div>
      <div className="row">
        {coursesList.map((course) => {
          return (
            <div className="col-md-4">
              <div className="position-relative course">
                <img src={course.image} alt="" className="w-100"/>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <hr></hr>
                  <button className="primary-button w-100"><a href={course.link}> About of course/lecture </a></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
