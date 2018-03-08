import React, { Component } from "react";
import PropTypes from "prop-types";
import TweetList from "../../components/TweetList/TweetList";
import UserProfile from "../../components/UserProfile/UserProfile";
import HashtagList from "../../components/HashtagList/HashtagList";
import Header from "../../components/Header/Header";
import axios from "axios";

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,

    };
    this.searchUser = this.searchUser.bind(this);
    this.renderHashTags = this.renderHashTags.bind(this);
  }

  async searchUser(username, tweetsToGet)  {
    const config = {
      withCredentials: true,
      params: {
        oauth_token: this.props.user.twitterProvider.token,
        oauth_token_secret: this.props.user.twitterProvider.tokenSecret,
        user_id: this.props.user._id,
        user: username,
        count: tweetsToGet
      }
    };

    try{
      const result = await axios.get(`/search`, config);
      this.setState({
        data: result.data
      });
    } catch (e){
      throw e;
    }
  }

  renderHashTags(){
    if (this.state.data){
      return <HashtagList hashtags={this.state.data.user.most_common_hashtags} />;
    } else {
      return null;
    }
  }

  renderIntro(){
    if (!this.props.isAuthenticated){
      return (
        <div className="showcase">
          <h1 className="showcase-title">Overview</h1>
          <p className="showcase-body">Welcome to Overview!</p>
          <p>Overview helps you get a quick snapshot of a twitter user, by making it easier to view their tweets in mass.
            Sign in with Twitter to get started.</p>
        </div>
      );
    } else{
      if (!this.state.data){
        return (
          <div className="showcase">
            <p className="showcase-body">Search for a twitter user by their @screenname to get started.</p>
          </div>
        );
      }
      return null;
    }
  }

  renderUserProfile(){
    if (this.state.data){
      return (
        <UserProfile
          user={this.state.data.user} />
      );
    } else {
      return null;
    }
  }

  renderTweetDisplay(){
    if (this.state.data){
      return(
        <div className="tweet-display">
          <TweetList
            heading="Latest"
            tweets={this.state.data.tweetData} />
          <TweetList
            heading="Top Tweets"
            tweets={this.state.data.topTweets} />
          {this.renderHashTags()}
        </div>
      );
    } else {
      return null;
    }
  }

  renderTwitterData(){
    if (this.props.isAuthenticated){
      return (
        <div>
          {this.renderUserProfile()}
          {this.renderTweetDisplay()}
        </div>
      )

    } else {
      return null;
    }
  }

  renderMainPage(){
    return (
      <div className="content-wrapper">
        {this.renderIntro()}
        {/* {this.renderUserProfile()}
        {this.renderTweetDisplay()} */}
        {this.renderTwitterData()}
      </div>
    );
  }

  render() {
    return (
      <div className="MainPage">
        <Header
          {...this.props}
          search={this.searchUser}/>
        {this.renderMainPage()}
      </div>
    );
  }
}

MainPage.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default MainPage;
