import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
      <Link to="/create/1">Create Athlete Profile</Link>
    </div>
  );
};

export default NotFound;
