import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import sportsList from "../sportsList/sportsList";

const AthleteForm1 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [basicForm, setBasicForm] = useState(
    state || {
      name: "",
      sports: [],
      gender: "",
      dob: "",
      location: "",
      team: "",
      about: "",
      interests: "",
      profileImage: "",
    }
  );

  const onNameChange = (e) => {
    setBasicForm({ ...basicForm, name: e.target.value });
  };

  const onGenderChange = (e) => {
    setBasicForm({ ...basicForm, gender: e.target.value });
  };

  const onDobChange = (e) => {
    setBasicForm({ ...basicForm, dob: e.target.value });
  };

  const onSportsChange = (e) => {
    setBasicForm({
      ...basicForm,
      sports: [...basicForm.sports, e.target.value],
    });
  };

  const onRemoveSport = (item) => {
    setBasicForm({
      ...basicForm,
      sports: basicForm.sports.filter((sport) => sport !== item),
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    navigate("/create/2", { state: basicForm });
  };

  return (
    <div>
      <h3>New Athlete Profile: Basic Information</h3>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={basicForm.name}
            onChange={onNameChange}
          />
        </div>
        <div className="form-group">
          <label>Gender: </label>
          <select
            required
            className="form-select"
            defaultValue={basicForm.gender || ""}
            onChange={onGenderChange}
          >
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth: </label>
          <input
            type="date"
            required
            className="form-control"
            value={basicForm.dob}
            onChange={onDobChange}
          />
        </div>
        <div className="form-group">
          <label>Sports: </label>
          <select
            className="form-select mb-2"
            placeholder="Select Sports"
            onChange={onSportsChange}
            defaultValue={basicForm.sports[0] || ""}
            required
          >
            <option value="">-- Select Sports --</option>
            {sportsList.map((sport, i) => (
              <option key={i}>{sport}</option>
            ))}
          </select>
          {basicForm.sports.length ? (
            basicForm.sports.map((sport, i) => (
              <input
                type="button"
                className="btn btn-secondary me-2"
                key={i}
                value={sport + "  X"}
                onClick={() => onRemoveSport(sport)}
              />
            ))
          ) : (
            <p>Add your sports!</p>
          )}
        </div>
        <div className="form-group mt-4">
          <input type="submit" className="btn btn-primary" value="Next" />
        </div>
      </form>
    </div>
  );
};

export default AthleteForm1;
