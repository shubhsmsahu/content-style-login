import React from "react";

const AboutSection = ({ userName, Image }) => {
  return (
    <div className="Form my-5 mx-5">
      <div className="container">
        <h1 className="about">About</h1>
        <div className="row py-5 justify-content-center">
          <div className="col-lg-3">
            <img className="imageProfile" src={Image} alt="profile" />
          </div>
          <div className="col-lg-5">
            <h3 className="mt-4">{userName}</h3>
            <h5>Cuba</h5>
            <p className="details">
              Entrepreneur,Fitness Vlogger,Business Advisor
            </p>
          </div>
          <div className="col-lg-3">
            <button className="btn2">Send Private Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
