import React from "react";

const AthleteInfo = ({ info }) => {
  return (
    <div className="container my-5 bg-light d-flex flex-column align-items-center">
      <img
        src={info.profileImage}
        style={{ height: "180px" }}
        className="img-thumbnail img-responsive align-self-center my-4"
      />
      <div className="d-flex flex-column align-items-center">
        <p>
          <span className="fw-bold">Name: </span>
          {info.name}
        </p>
        <p>
          <span className="fw-bold">Date of Birth: </span>
          {info.dob}
        </p>
        <p>
          <span className="fw-bold">Location: </span>
          {info.location}
        </p>
        <p>
          <span className="fw-bold">Sports: </span>
          {info.sports.join(", ")}
        </p>
        <p>
          <span className="fw-bold">Location: </span>
          {info.location}
        </p>
        <p>
          <span className="fw-bold">Team: </span>
          {info.team}
        </p>
        <p>
          <span className="fw-bold">About: </span>
          {info.about}
        </p>
        <p>
          <span className="fw-bold">Interests: </span>
          {info.interests}
        </p>
      </div>
    </div>
  );
};

export default AthleteInfo;
