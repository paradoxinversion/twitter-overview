import React from "react";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import "./Header.css";
const Header = (props) => {
  return (
    <header className="overview-header">
      <div>
        <p className="brand"> Overview </p>
      </div>

      <UserSearchBar search={props.search} handleInput={props.handleInput} searchQuery={props.searchQuery}/>
    </header>
  );

};
export default Header;
