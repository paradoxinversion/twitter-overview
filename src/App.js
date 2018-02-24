import React, { Component } from "react";
import TweetList from "./components/Tweet/TweetList";
import UserProfile from "./components/UserProfile/UserProfile";
import HashtagList from "./components/Hashtags/HashtagList";
import Header from "./components/Header/Header";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userquery: "",
      data: [],
      pageLoaded: false,
      error: false
    };
    this.searchUser = this.searchUser.bind(this);
    this.renderHashTags = this.renderHashTags.bind(this);
  }

  async searchUser(username, tweetsToGet)  {
    try{
      const result = await axios.get(`/search?user=${username}&count=${tweetsToGet}`);
      this.setState({
        data: result.data
      });
    } catch (e){
      throw e;
    }
  }

  renderHashTags(){
    if (this.state.data.user){
      return <HashtagList hashtags={this.state.data.user.most_common_hashtags} />;
    } else {
      return null;
    }
  }

  render() {
    let intro;
    if (this.state.data.length === 0 ){
      intro = (
        <div className="showcase">
          <h1 className="showcase-title">Twitter Overview</h1>
          <p className="showcase-body">Enter a screen name to get a user&apos;s tweets and other interesting information!</p>
        </div>
      );
    } else{
      intro = null;
    }
    return (
      <div className="App">
        <Header search={this.searchUser} />
        <div className="content-wrapper">
          {intro}
          <UserProfile user={this.state.data.user} />
          <div className="tweet-display">
            <TweetList heading="Latest" tweets={this.state.data.tweetData} />
            <TweetList heading="Top Tweets" tweets={this.state.data.topTweets} />
            {this.renderHashTags()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
