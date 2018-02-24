import React from "react";
import "./Hashtag.css";
const Hashtag = (props) => {
  return (
    <div className="hashtag-wrapper">
      <p className="hashtag-item">  <a className="hashtag" href={`https://twitter.com/hashtag/${props.hashtag[0]}`}> #{props.hashtag[0]}</a> {props.hashtag[1]} Tweet(s) with this hashtag </p>
    </div>
  );
};

export default Hashtag;
