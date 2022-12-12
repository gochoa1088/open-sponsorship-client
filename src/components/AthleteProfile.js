import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AthleteInfo from "./AthleteInfo";

const AthleteProfile = () => {
  const params = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`https://open-sponsorship-api.onrender.com/athletes/${params.id}`)
      .then((res) => setProfile(res.data));
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Athlete Profile: {profile.name}</h3>
      <p>Profile complete!</p>
      <AthleteInfo info={profile} />
    </div>
  );
};

export default AthleteProfile;
