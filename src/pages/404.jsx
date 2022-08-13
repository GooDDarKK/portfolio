import React from "react";
import image from "../img/404.jpg";

const Error = () => {
  return (
    <>
      <div className="nav_section"></div>
      <div className="error_page">
        <img src={image} alt="404 not found" />
      </div>
    </>
  );
};

export default Error;
