import React from 'react';
import './Tweet.css';
const Tweet = (props) => {
  let inReply;
  if (props.tweet.in_reply_to_user_id_str != null){
    inReply = (
      <div>
        <p> In reply to <a href={`https://twitter.com/intent/user?user_id=${props.tweet.in_reply_to_user_id_str}`}>{props.tweet.in_reply_to_screen_name}.</a> </p>
      </div>
    )
  }
  return (
    <div className="tweet-wrapper">
      <div>
        {inReply}
      </div>
      <div className="tweet">
        <p> {props.tweet.full_text} </p>
      </div>
      <div>
        <a href={`https://twitter.com/statuses/${props.tweet.id_str}`}>Thread</a>
      </div>
    </div>


  );
};

export default Tweet;
