import React from "react";
import TweetMedia from "../TweetMedia/TweetMedia";
import "./Tweet.css";
const Tweet = (props) => {
  let inReply;
  if (props.tweet.in_reply_to_user_id_str != null){
    inReply = (
      <div className="reply-info-wrapper">
        <p> In reply to <a href={`https://twitter.com/intent/user?user_id=${props.tweet.in_reply_to_user_id_str}`}>{props.tweet.in_reply_to_screen_name}.</a> </p>
      </div>
    );
  }

  let mediaElement;
  if (props.tweet.media){
    const mediaItems = props.tweet.media.map((mediaObject, index) => {
      return <TweetMedia key={index} mediaObject={mediaObject} />
    });
    mediaElement = (
      <div className="tweet-media-container">
        {mediaItems}
      </div>
    )
  }
  return (
    <div className="tweet-wrapper">
      <div className="tweet">
        {inReply}
        <div className="tweet-text" dangerouslySetInnerHTML={{__html:props.tweet.full_text.replace(/\n/g, "<br>")}} />
        {/* <p className="tweet-text"> {props.tweet.full_text.replace(/\n/g, "<br>")} </p> */}
        {mediaElement}
        <div className="tweet-metadata">
          <a className="tweet-thread" href={`https://twitter.com/statuses/${props.tweet.id_str}`}>Thread</a>
        </div>
      </div>

    </div>


  );
};

export default Tweet;
