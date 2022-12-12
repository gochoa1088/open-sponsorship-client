import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import API_CONNECTION from "../dbConfig";

const UpdateTextInput = (props) => {
  const params = useParams();
  const key = Object.keys(props)[0];
  const { setProfile, profile, setError } = props;

  const [isUpdated, setIsUpdated] = useState(false);

  const onSubmitForm = (id, info) => {
    axios
      .put(`${API_CONNECTION}/athletes/update/${id}`, info)
      .then((res) => setIsUpdated(true))
      .catch((err) => setError(err));
  };

  return (
    <form
      onSubmit={() => onSubmitForm(params.id, { [key]: props[key] })}
      className="my-2 d-flex form-group w-100"
    >
      <label className="fw-bold align-self-center">
        {key[0].toUpperCase() + key.slice(1)}:{" "}
      </label>
      <input
        type="text"
        required
        className="form-control mx-4"
        onChange={(e) => {
          setIsUpdated(false);
          setProfile({ ...profile, [key]: e.target.value });
        }}
        value={props[key]}
      />
      <input
        type="submit"
        value={isUpdated ? "Updated!" : "Update"}
        className="btn btn-secondary"
      />
    </form>
  );
};

export default UpdateTextInput;
