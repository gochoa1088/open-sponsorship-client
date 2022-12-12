import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import API_CONNECTION from "../dbConfig";

const UpdateBirthInput = ({ profile, setError, setProfile }) => {
  const params = useParams();
  const [isUpdated, setIsUpdated] = useState(false);

  const onDobChange = (e) => {
    setIsUpdated(false);
    setProfile({ ...profile, dob: e.target.value });
  };

  const onSubmitForm = (id, info) => {
    axios
      .put(`${API_CONNECTION}/athletes/update/${id}`, info)
      .then((res) => setIsUpdated(true))
      .catch((err) => setError(err));
  };

  const defaultDate = profile.dob.substring(0, 10);

  return (
    <form
      onSubmit={() => onSubmitForm(params.id, { dob: profile.dob })}
      className="my-2 d-flex form-group w-100"
    >
      <label className="fw-bold align-self-center">DoB: </label>
      <input
        type="date"
        required
        className="form-control mx-4"
        defaultValue={defaultDate}
        onChange={onDobChange}
      />
      <input
        type="submit"
        value={isUpdated ? "Updated!" : "Update"}
        className="btn btn-secondary"
      />
    </form>
  );
};

export default UpdateBirthInput;
