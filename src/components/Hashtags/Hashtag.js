import React from 'react';
const Hashtag = (props) => {
  return (
    <div className="hashtag-wrapper">
      <div className="hashtag">
        <p> {props.hashtag[0]} {props.hashtag[1]} </p>
      </div>

    </div>


  );
};

export default Hashtag;
