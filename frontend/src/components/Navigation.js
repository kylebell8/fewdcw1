import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Menus">Menus</Link>
          </li>
          <li>
            <Link to="/Shopping">Shopping List</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Navigation;