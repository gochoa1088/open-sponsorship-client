import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import API_CONNECTION from "../dbConfig";
import AthleteInfo from "./AthleteInfo";

const AthleteSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!state) {
      navigate("/create/1");
    }
  }, []);

  const onSubmitForm = () => {
    axios
      .post(`${API_CONNECTION}/athletes/add`, state)
      .then((res) =>
        navigate(`/athletes/${res.data.id}`, { state: { id: res.data.id } })
      )
      .catch((err) => setError(err));
  };

  const onPrevious = () => {
    navigate("/create/2", {
      state,
    });
  };

  if (error) {
    return <p>Error adding athlete</p>;
  }

  return (
    <div>
      <h3>New Athlete Profile: Summary</h3>
      <AthleteInfo info={state} />
      <div className="form-group mt-4">
        <input
          type="button"
          className="btn btn-primary me-2"
          value="Previous"
          onClick={onPrevious}
        />
        <input
          type="button"
          onClick={onSubmitForm}
          className="btn btn-primary"
          value="Submit"
        />
      </div>
    </div>
  );
};

export default AthleteSummary;
