import React from "react";
import About from "./AboutSection";
import Follow from "./FollowSection";
import Post from "./PostSection";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = ({ userName, Image }) => {
  return (
    <>
      <About userName={userName} Image={Image} />
      <Follow />
      <Post />
    </>
  );
};

export default Profile;
