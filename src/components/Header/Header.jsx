import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="container">
      <Link to="/">
        <h1 className="headerTitle">Github API</h1>
      </Link>
    </div>
  );
};

export default Header;
