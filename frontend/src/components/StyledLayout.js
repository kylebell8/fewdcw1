import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark bg-custom">
        <Header />
        <div className="container-fluid" style= {{marginLeft:"10%"}}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-link">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shopping" className="nav-link">
                Shopping List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menus" className="nav-link">
                Menus
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
