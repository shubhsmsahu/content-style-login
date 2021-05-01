import React from "react";

const FollowSection = () => {
  return (
    <div className="From my-5 mx-5">
      <div className="container">
        <h1 className="about">Follow</h1>
        <div className="row py-5 justify-content-center">
          <a
            className="social-link"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
          </a>
          <a
            className="social-link"
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
          </a>
          <a
            className="social-link"
            href="https://www.youtube.com/index"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-youtube-square fa-3x" aria-hidden="true"></i>
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/login/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
          </a>
          <a
            className="social-link"
            href="https://accounts.snapchat.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-snapchat-square fa-3x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowSection;
