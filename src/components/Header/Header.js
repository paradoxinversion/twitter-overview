import React from "react";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import "./Header.css";
const Header = (props) => {
  return (
    <header className="overview-header">
      <div className="brand-wrapper">
        <p className="brand"> Overview </p>
      </div>
      <div className="search-wrapper">
        <UserSearchBar {...props} />
      </div>
    </header>
  );

};
export default Header;
