import React from "react";
import TwitterLogin from "react-twitter-auth";
import PropTypes from "prop-types";

class TwitterAuth extends React.Component {

  renderLogoutButton(){
    return (
      <button onClick={()=>{
        this.props.logOut();
      }}>Log Out</button>
    );
  }

  renderLogin(){
    return (
      <TwitterLogin
        loginUrl="http://localhost:3001/auth/twitter"
        onFailure={this.props.onFailure}
        onSuccess={this.props.onSuccess}
        requestTokenUrl="http://localhost:3001/auth/twitter/reverse">Test</TwitterLogin>
    );
  }

  renderUserName(){
    if (this.props.isAuthenticated){
      return (
        <div>
          <p> Ahoy, {this.props.user.displayName}!</p>
          {this.renderLogoutButton()}
        </div>
      );
    }
  }

  render(){
    let render;
    if (this.props.isAuthenticated){
      render = this.renderUserName();
    } else{
      render = this.renderLogin();
    }
    return (
      <div className="tweet-wrapper">
        {render}
      </div>
    );
  }
}

TwitterAuth.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  user: PropTypes.object
};
export default TwitterAuth;
