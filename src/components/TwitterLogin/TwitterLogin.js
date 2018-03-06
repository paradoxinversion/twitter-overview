import React from "react";
import TweetMedia from "../TweetMedia/TweetMedia";
import axios from "axios";
class TwitterLogin extends React.Component {
  constructor(props){
    super(props);
  }

  renderLoginButton(){
    return (
      // <button onClick={async ()=>{
      //   const res = await axios.get("/auth/twitter");
      //   console.log(res);
      // }}>Log in with Twitter</button>
      <a href="http://localhost:3001/auth/twitter">Log in with Twitter</a>
    );
  }

  render(){
    return (
      <div className="tweet-wrapper">
        {this.renderLoginButton()}
      </div>
    );
  }
}

export default TwitterLogin;
