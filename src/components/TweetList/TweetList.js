import React from "react";
import PropTypes from "prop-types";
import Tweet from "../Tweet/Tweet";
import "./TweetList.css";
class TweetList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tweets: props.tweets
    };
  }

  renderTweets(){
    if (this.props.tweets.length === 0){
      return <p> There are no tweets to return </p>;
    } else{
      const tweets = this.props.tweets.map((tweet) => {
        return <Tweet key={tweet.id_str} tweet={tweet}/>;
      });
      return (
        <div className="tweetlist">
          {tweets}
        </div>
      );
    }
  }
  render(){
    if (this.props.tweets){
      return (
        <div className="tweetlist-container">
          <h1 className="tweetlist-heading"> {this.props.heading} </h1>
          {this.renderTweets()}
        </div>
      );
    } else {
      return null;
    }

  }

}

TweetList.propTypes = {
  heading: PropTypes.string.isRequired,
  tweets: PropTypes.array.isRequired
};

export default TweetList;
