import React from "react";
import TweetMedia from "../TweetMedia/TweetMedia";
import "./Tweet.css";
class Tweet extends React.Component {
  constructor(props){
    super(props);
  }

  renderReply(){
    let inReply;
    if (this.props.tweet.in_reply_to_user_id_str != null){
      inReply = (
        <div className="reply-info-wrapper">
          <p> In reply to <a href={`https://twitter.com/intent/user?user_id=${this.props.tweet.in_reply_to_user_id_str}`}>{this.props.tweet.in_reply_to_screen_name}.</a> </p>
        </div>
      );
    }
    return inReply;
  }

  renderMedia(){
    let mediaElement;
    if (this.props.tweet.media){
      const mediaItems = this.props.tweet.media.map((mediaObject, index) => {
        return <TweetMedia key={index} mediaObject={mediaObject} />
      });
      mediaElement = (
        <div className="tweet-media-container">
          {mediaItems}
        </div>
      )
    }
    return mediaElement;
  }

  renderTweetText(fullText){
    return <div className="tweet-text" dangerouslySetInnerHTML={{__html:fullText}} />
  }

  renderMetadata(){
    return (
      <div className="tweet-metadata">
        <a className="tweet-thread" href={`https://twitter.com/statuses/${this.props.tweet.id_str}`}>Thread</a>
      </div>
    )
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
      )
    }
    return (
      <div className="tweet">
        {this.renderReply()}
        {this.renderTweetText(this.props.tweet.full_text.replace(/\n/g, "<br>"))}
        {this.renderMedia()}
        {retweetElement}
        {this.renderMetadata()}
      </div>
    )

  }
  render(){
    return (
      <div className="tweet-wrapper">
        {/* <div className="tweet">
          {this.renderReply()}
          {this.renderTweetText()}
          {this.renderMedia()}
          {this.renderMetadata()}
        </div> */}
        {this.renderTweet()}
      </div>
    );
  }

};

export default Tweet;
