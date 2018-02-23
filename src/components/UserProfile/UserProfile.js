
import React from 'react';
import './UserProfile.css';
var converter = require('number-to-words');

const UserProfile = (props) => {
  if (props.user){
    return (
      <div className="profile-wrapper">
        <div>
          <img className="profile-img" src={props.user.profile_image}/>
        </div>
        <div className="profile-info">
          <p className="profile-data-field">{props.user.name}</p>
          <p className="profile-data-field"><a href={`https://twitter.com/intent/user?user_id=${props.user.id_str}`}>@{props.user.screen_name}</a></p>
          <p className="profile-data-field">{props.user.location}</p>
          <p className="profile-data-field">{props.user.description}</p>
          <p className="profile-data-field"> {props.user.followers_count} Followers</p>
          <p className="profile-data-field">Following {props.user.friends_count} People</p>
          <p className="profile-data-field">{props.user.statuses_count} Tweets</p>
        </div>

      </div>
    );
  } else {
    return (
      null
    )

  }

};

export default UserProfile;
