import React from "react";
import PropTypes from "prop-types";
import Tweet from "../Tweet/Tweet";
import "./TweetList.css";
class TweetList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tweets: props.tweets,
      showList: false
    };
    this.toggleList = this.toggleList.bind(this);
  }

  renderTweets(){
    if (this.props.tweets.length === 0){
      return <p> There are no tweets to return </p>;
    } else{
      // console.log(this.props)
      const tweets = this.props.tweets.map((tweet) => {
        return <Tweet key={tweet.id_str} tweet={tweet}/>;
      });
      return (
        <div className="tweetlist tab-content">
          {tweets}
        </div>
      );
    }
  }

  toggleList(){
    this.setState({
      showList: !this.state.showList
    });
  }
  render(){
    if (this.props.tweets){
      return (
        <div className="tweetlist-container tab">

          {/* <button className="tweetlist-heading" onClick={this.toggleList}> {this.props.heading} </button> */}
          <input id={this.props.id} type="radio" name="tabs"/>
          <label htmlFor={this.props.id}>{this.props.heading}</label>
          {/* {this.state.showList ? this.renderTweets() : null} */}
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
