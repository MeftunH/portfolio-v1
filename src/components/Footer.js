import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,160L20,165.3C40,171,80,181,120,186.7C160,192,200,192,240,176C280,160,320,128,360,122.7C400,117,440,139,480,170.7C520,203,560,245,600,234.7C640,224,680,160,720,160C760,160,800,224,840,218.7C880,213,920,139,960,117.3C1000,96,1040,128,1080,160C1120,192,1160,224,1200,229.3C1240,235,1280,213,1320,186.7C1360,160,1400,128,1420,112L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg>
        <div className="row justify-content-center footer-content">
          <div className="col-md-6">
            <div>
              <p>
                Designed And Developed By
                <hr />
                <div className="d-flex justify-content-between px-2">
                  <a href="https://github.com/MeftunH">
                    <FaGithub 
                    className="footer-icons" 
                    color="white" />
                  </a>
                  <a href="mailto:maftunhashimli@gmail.com">
                  <FaMailBulk
                    className="footer-icons"
                    color="white"
                  />
                  </a>
                  <a href="https://www.linkedin.com/in/maftunhashimli/">
                  <FaLinkedinIn
                    className="footer-icons"
                    color="white"
                  />
                  </a>
                </div>
                <hr />
                <br />
                <p>Maftun Hashimli</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
