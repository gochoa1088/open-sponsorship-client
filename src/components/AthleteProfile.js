import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API_CONNECTION from "../dbConfig";
import UpdateBirthInput from "./UpdateBirthInput";
import UpdateGenderInput from "./UpdateGenderInput";
import UpdateSportsInput from "./UpdateSportsInput";
import UpdateTextInput from "./UpdateTextInput";

const AthleteProfile = () => {
  const params = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_CONNECTION}/athletes/${params.id}`)
      .then((res) => setProfile(res.data))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <p>Error: Invalid athlete ID</p>;
  }

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Athlete Profile</h3>
      <p>Profile complete!</p>
      <div className="container my-5 bg-light d-flex flex-column align-items-center">
        <img
          src={profile.profileImage}
          style={{ height: "180px" }}
          className="img-thumbnail img-responsive align-self-center my-4"
        />
        <div className="d-flex flex-column align-items-center">
          <UpdateTextInput
            name={profile.name}
            setProfile={setProfile}
            setError={setError}
            profile={profile}
          />
          <UpdateGenderInput
            setProfile={setProfile}
            setError={setError}
            profile={profile}
          />
          <UpdateBirthInput
            setProfile={setProfile}
            setError={setError}
            profile={profile}
          />
          <UpdateTextInput
            location={profile.location}
            setProfile={setProfile}
            setError={setError}
            profile={profile}
          />
          <UpdateSportsInput
            setProfile={setProfile}
            setError={setError}
            profile={profile}
          />
          <UpdateTextInput
            team={profile.team}
            setError={setError}
            setProfile={setProfile}
            profile={profile}
          />
          <UpdateTextInput
            about={profile.about}
            setError={setError}
            setProfile={setProfile}
            profile={profile}
          />
          <UpdateTextInput
            interests={profile.interests}
            setError={setError}
            setProfile={setProfile}
            profile={profile}
          />
        </div>
      </div>
    </div>
  );
};

export default AthleteProfile;
