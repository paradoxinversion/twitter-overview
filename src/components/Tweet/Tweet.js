import React from "react";
import PropTypes from "prop-types";
import TweetMedia from "../TweetMedia/TweetMedia";
import "./Tweet.css";

class Tweet extends React.Component {

  renderReply(){
    if (this.props.tweet.in_reply_to_user_id_str != null){
      return (
        <div className="reply-info-wrapper">
          <p> In reply to <a target="_blank" href={`https://twitter.com/intent/user?user_id=${this.props.tweet.in_reply_to_user_id_str}`}>{this.props.tweet.in_reply_to_screen_name}.</a> </p>
        </div>
      );
    }
    return null;
  }

  renderMedia(){
    let mediaElement;
    if (this.props.tweet.media){
      const mediaItems = this.props.tweet.media.map((mediaObject, index) =>
        <TweetMedia key={index} mediaObject={mediaObject} />
      );
      mediaElement = (
        <div className="tweet-media-container">
          {mediaItems}
        </div>
      );
    }
    return mediaElement;
  }

  renderTweetText(fullText){
    return <div className="tweet-text" dangerouslySetInnerHTML={{__html:fullText}} />;
  }

  renderMetadata(){
    return (
      <div className="tweet-metadata">
        <a
          className="tweet-thread"
          target="_blank"
          href={`https://twitter.com/statuses/${this.props.tweet.id_str}`}>Thread</a>
      </div>
    );
  }

  renderTweet(){
    let retweetElement;
    if (this.props.tweet.retweet){
      retweetElement = (
        <div className="retweet">
          {this.renderReply()}
          {this.renderTweetText(this.props.tweet.retweet.full_text.replace(/\n/g, "<br>"))}
          {this.renderMedia()}
          {this.renderMetadata()}
        </div>
      );
    }
    return (
      <div className="tweet">
        {this.renderReply()}
        {this.renderTweetText(this.props.tweet.full_text.replace(/\n/g, "<br>"))}
        {this.renderMedia()}
        {retweetElement}
        {this.renderMetadata()}
      </div>
    );

  }
  render(){
    return (
      <div className="tweet-wrapper">
        {this.renderTweet()}
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default Tweet;
