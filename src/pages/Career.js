import React from "react";
import Header from "../components/Header";
import {IoCodeSlash} from "react-icons/io5";
import jobsData from '../data/jobsData';
function Career() {
  return (
    <div>
      <Header />
      <div className="container career-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box-interest-intro px-3" data-aos="fade-down">
            <div>
              <h1 className="font-bold">Career</h1>
              <p className="font-bold">
                Good ideas are not adopted automatically.They must be driven
                into practice with courageous patience
              </p>
              <button className="primary-button">Get Started</button>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0F62FE"
                d="M50.5,-43.3C63.4,-24.1,70.3,-3.3,65.8,14.4C61.3,32.2,45.4,46.7,27.9,53.3C10.5,59.9,-8.5,58.5,-29.6,51.9C-50.7,45.4,-74,33.8,-80.6,15.4C-87.2,-3,-77.1,-28.2,-60.9,-48.1C-44.7,-68,-22.3,-82.6,-1.8,-81.2C18.8,-79.8,37.6,-62.4,50.5,-43.3Z"
                transform="translate(100 100)"
              />
            </svg>

            <IoCodeSlash 
            color="white"
            size='180'
            className="position-absolute top-50 start-50 translate-middle"/>
          </div>
        </div>
      </div>

      <div className="container job-history-list">
       <h3 className="font-bold">Job history</h3>
       <hr></hr>
        </div>
        <div className="row">
          {jobsData.map((job) => {
            return (
              <div className="col-md-6">
               <div className="position-relative job">
                <img src={job.logo} alt="" />
                <div className="job-content">
                 <h3>
                  {job.title}
                 </h3>
                 <hr></hr>
                 <p>{job.company}</p>
                 <p>{job.location}</p>
                 <p>{job.date_range}</p>
                 <p>{job.technologies}</p>
                 <p>{job.about}</p>
                </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Career;
