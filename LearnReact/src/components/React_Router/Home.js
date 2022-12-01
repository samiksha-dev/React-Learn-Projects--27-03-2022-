//Browser Router is used to connect our app to browsers url
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "../Header";
// NavLink helps in distinguishing ki kaunse page pe hai
//jo page hum visit krte hai agar usse inspect kre toh we will see usme ek className aa jaati hai active

const Home = () => {
  return (
    <div>
      {/* <header>
        <a href="#">Logo</a>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "} */}
      {/* now link will take it to the page without reloading */}
      {/* <Link to="/about">About</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>Contact
            </li>
          </ul>
        </nav>
      </header> */}
      {/* <header>
        <a href="#">Logo</a>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {" "}
           
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/contact">Contact</NavLink>Contact
            </li>
          </ul>
        </nav>
      </header> */}
      <Header />
      <Outlet />
      {/* Outlet is shared+nested */}
    </div>
  );
};

export default Home;
