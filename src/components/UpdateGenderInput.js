import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import API_CONNECTION from "../dbConfig";

const UpdateGenderInput = ({ profile, setError, setProfile }) => {
  const params = useParams();
  const [isUpdated, setIsUpdated] = useState(false);

  const onGenderChange = (e) => {
    setIsUpdated(false);
    setProfile({ ...profile, gender: e.target.value });
  };

  const onSubmitForm = (id, info) => {
    axios
      .put(`${API_CONNECTION}/athletes/update/${id}`, info)
      .then((res) => setIsUpdated(true))
      .catch((err) => setError(err));
  };

  return (
    <form
      className="my-2 d-flex form-group w-100"
      onSubmit={() => onSubmitForm(params.id, { gender: profile.gender })}
    >
      <label className="fw-bold align-self-center">Gender: </label>
      <select
        required
        className="form-select mx-4"
        defaultValue={profile.gender || ""}
        onChange={onGenderChange}
      >
        <option value="">-- Select Gender --</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input
        type="submit"
        value={isUpdated ? "Updated!" : "Update"}
        className="btn btn-secondary"
      />
    </form>
  );
};

export default UpdateGenderInput;
