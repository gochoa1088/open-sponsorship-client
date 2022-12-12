import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import API_CONNECTION from "../dbConfig";
import sportsList from "../sportsList/sportsList";

const UpdateSportsInput = ({ setProfile, setError, profile }) => {
  const params = useParams();
  const [isUpdated, setIsUpdated] = useState(false);

  const onSportsChange = (e) => {
    setIsUpdated(false);
    setProfile({
      ...profile,
      sports: [...profile.sports, e.target.value],
    });
  };

  const onRemoveSport = (item) => {
    setIsUpdated(false);
    setProfile({
      ...profile,
      sports: profile.sports.filter((sport) => sport !== item),
    });
  };

  const onSubmitForm = (id, info) => {
    axios
      .put(`${API_CONNECTION}/athletes/update/${id}`, info)
      .then((res) => setIsUpdated(true))
      .catch((err) => setError(err));
  };

  return (
    <form
      onSubmit={() => onSubmitForm(params.id, { sports: [...profile.sports] })}
      className="my-2 d-flex form-group"
    >
      <label className="fw-bold align-self-center">Sports: </label>
      <div className="mx-4">
        <select
          className="form-select mb-2"
          placeholder="Select Sports"
          onChange={onSportsChange}
          defaultValue={profile.sports[0] || ""}
          required
        >
          <option value="">-- Select Sports --</option>
          {sportsList.map((sport, i) => (
            <option key={i}>{sport}</option>
          ))}
        </select>
        {profile.sports.length ? (
          profile.sports.map((sport, i) => (
            <input
              type="button"
              className="btn btn-sm btn-secondary me-2"
              key={i}
              value={sport + "  X"}
              onClick={() => onRemoveSport(sport)}
            />
          ))
        ) : (
          <p>Add your sports!</p>
        )}
      </div>
      <input
        type="submit"
        value={isUpdated ? "Updated!" : "Update"}
        className="btn btn-secondary h-50"
      />
    </form>
  );
};

export default UpdateSportsInput;
