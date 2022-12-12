import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AthleteForm2 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (!state) {
      navigate("/create/1");
    }
  }, []);

  const [aboutForm, setAboutForm] = useState({
    ...state,
  });

  const onLocationChange = (e) => {
    setAboutForm({ ...aboutForm, location: e.target.value });
  };

  const onTeamChange = (e) => {
    setAboutForm({ ...aboutForm, team: e.target.value });
  };

  const onAboutChange = (e) => {
    setAboutForm({ ...aboutForm, about: e.target.value });
  };

  const onInterestsChange = (e) => {
    setAboutForm({ ...aboutForm, interests: e.target.value });
  };

  const onImageChange = (e) => {
    setAboutForm({ ...aboutForm, profileImage: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    navigate("/create/summary", { state: aboutForm });
  };

  const onPrevious = () => {
    navigate("/create/1", {
      state: aboutForm,
    });
  };

  return (
    <div>
      <h3>New Athlete Profile: About</h3>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label>Location: </label>
          <input
            type="text"
            required
            className="form-control"
            value={aboutForm.location}
            onChange={onLocationChange}
          />
        </div>
        <div className="form-group">
          <label>Team: </label>
          <input
            type="text"
            required
            className="form-control"
            value={aboutForm.team}
            onChange={onTeamChange}
          />
        </div>
        <div className="form-group">
          <label>About: </label>
          <input
            type="text"
            required
            className="form-control"
            value={aboutForm.about}
            onChange={onAboutChange}
          />
        </div>
        <div className="form-group">
          <label>Interests: </label>
          <input
            type="text"
            required
            className="form-control"
            value={aboutForm.interests}
            onChange={onInterestsChange}
          />
        </div>
        <div className="form-group">
          <label>Photo: </label>
          <input
            type="text"
            required
            className="form-control"
            value={aboutForm.profileImage}
            onChange={onImageChange}
          />
        </div>
        <div className="form-group mt-4">
          <input
            type="button"
            className="btn btn-primary me-2"
            value="Previous"
            onClick={onPrevious}
          />
          <input type="submit" className="btn btn-primary" value="Next" />
        </div>
      </form>
    </div>
  );
};

export default AthleteForm2;
