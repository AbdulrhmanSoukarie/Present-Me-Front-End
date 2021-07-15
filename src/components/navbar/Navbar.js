import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon">Present Me</div>
        <div className="search">
          <input type="search" placeholder="Search here..." />
          <SearchIcon style={{ fontSize: 30 }} className="search_material" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/discover">Discover</Link>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <label htmlFor="check" className="bar">
          <MenuIcon style={{ color: "#fff" }} id="bars" />
          <CloseIcon style={{ color: "#fff" }} id="times" />
        </label>
      </nav>
    </div>
  );
};

export default navbar;
