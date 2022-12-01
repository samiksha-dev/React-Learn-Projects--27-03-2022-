import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <a href="#">Logo</a>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {" "}
              {/* { now Nav will take it to the page without reloading */} */}
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/contact">Contact</NavLink>Contact
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
