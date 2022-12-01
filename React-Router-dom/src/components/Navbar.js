import React from "react";
import { Link } from "react-router-dom";
// Navlink helps in finding better a link is active or not
//also jis page pe hote hai usme yeh navlink me class="active" aa jaati hai

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
