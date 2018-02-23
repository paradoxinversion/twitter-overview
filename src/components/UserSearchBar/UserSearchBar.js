
import React from 'react';
import './UserSearchBar.css';

class UserSearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: ""
    }
  }

  render(){
    return (
      <div className="form-container">
        <form onSubmit={this.props.search}>

          <input className="input" type="text" onChange={this.props.handleInput} value={this.props.searchQuery} name="username" placeholder="@user" />
        </form>
      </div>


    )
  }

};

export default UserSearchBar;
