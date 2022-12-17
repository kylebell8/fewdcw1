import React from "react";
import { Link, Outlet } from "react-router-dom";

const Locations = () => {
  return (
    <div className="Page">
      <h1>You are in the locations page</h1>
      <h3>URL: localhost:3000/locations</h3>
      <div>
        <ul>
          <li>
            <Link to="/locations/search">Search</Link>
          </li>
          <li>
            <Link to="/locations/list">List</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Locations;
