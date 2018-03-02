import React from "react";
import "./TweetMedia.css";
const TweeMedia = (props) => {
  let mediaElement;
  if (props.mediaObject.type === "photo"){
    mediaElement = <img className="tweet-media-img" src={props.mediaObject.media_url_https} />
  } else if (props.mediaObject.type === "video"){
    mediaElement = (
      <video className="tweet-media-vid" controls>
        <source src={props.mediaObject.variants[0].url } type={props.mediaObject.variants[0].content_type}/>
      </video>
    );
  }
  return (
    <div className="tweet-media">

      {mediaElement}
    </div>


  );
};

export default TweeMedia;
