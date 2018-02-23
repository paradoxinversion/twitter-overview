
import React from "react";
import "./UserSearchBar.css";

const UserSearchBar = (props) => {
  return (
    <div className="form-container">
      <form onSubmit={props.search}>
        <input className="input" type="text" onChange={props.handleInput} value={props.searchQuery} name="username" placeholder="@user" />
      </form>
    </div>

  );
};

export default UserSearchBar;
