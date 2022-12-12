import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand mx-4">
          OpenSponsorship
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/athletes" className="nav-link">
                Athletes
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create/1" className="nav-link">
                Create Athlete Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Navbar;
