import React from "react";
import Typical from "react-typical";
import "./Profile.css";
function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/samiksha-sahu2305/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="mailto:samikshasahu23@gmail.com">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="https://github.com/samiksha-dev">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highligthed-text">Samiksha Sahu</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer🔴",
                    1000, //1 sec
                    "React Frontend Developer😎",
                    1000,
                    "QA Engineer🚀",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Skilled in building applications with frontend operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="='btn primary-btn"> Hire Me </button>
            <a href="Samiksha_Sahu_Resume (1).pdf" download>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
