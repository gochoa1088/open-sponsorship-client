import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AthleteList = () => {
  const [athleteList, setAthleteList] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/athletes")
      .then((res) => setAthleteList(res.data));
  }, []);

  if (!athleteList) {
    return <p>Loading...</p>;
  }

  if (!athleteList.length) {
    return <p>No current athletes</p>;
  }

  return (
    <div>
      <h3>Athlete List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Sports</th>
          </tr>
        </thead>
        <tbody>
          {athleteList.map((athlete, i) => {
            return (
              <tr key={athlete + i}>
                <th>{i + 1}</th>
                <td>
                  <Link to={`${athlete._id}`}>{athlete.name}</Link>
                </td>
                <td>{athlete.location}</td>
                <td>{athlete.sports.join(", ")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AthleteList;
