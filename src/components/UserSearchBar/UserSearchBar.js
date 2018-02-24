import React from "react";
import "./UserSearchBar.css";

class UserSearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: "",
      tweetsAmt: 25
    };
    this.handleUserQueryUpdate = this.handleUserQueryUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserQueryUpdate(event){
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.search(this.state.searchQuery, this.state.tweetsAmt);
  }

  render(){
    return (
      <div className="form-container">
        <form className="user-search-form" onSubmit={this.handleSubmit}>
          <input className="input" type="text" onChange={this.handleUserQueryUpdate} value={this.state.searchQuery} name="searchQuery" placeholder="@user" />
          <select className="dropdown" name="tweetsAmt" value={this.state.tweetsAmt} onChange={this.handleUserQueryUpdate}>
            <option className="dropdown-item" value={25}>25</option>
            <option className="dropdown-item" value={50}>50</option>
            <option className="dropdown-item" value={100}>100</option>
            <option className="dropdown-item" value={200}>200</option>
            <option className="dropdown-item" value={500}>500</option>
            <option className="dropdown-item" value={1000}>1000</option>
          </select>
        </form>
      </div>
    );
  }
}

export default UserSearchBar;
