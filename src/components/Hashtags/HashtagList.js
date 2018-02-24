import React from "react";
import Hashtag from "./Hashtag";
import "./HashtagList.css";
class HashtagList extends React.Component{
  constructor(props){
    super(props);
  }
  renderHashtags(){
    if (this.props.hashtags === 0){
      return <p> There are no hashtags to return </p>;
    } else{
      const hashtags = this.props.hashtags.map((hashtag) => {
        return <Hashtag key={hashtag[0]} hashtag={hashtag}/>;
      });
      return (
        <div className="hashtag-list">
          {hashtags}
        </div>
      );
    }
  }
  render(){
    if (this.props.hashtags){
      return (
        <div className="hashtag-list-wrapper">
          <h1>Most Used Hashtags</h1>
          {this.renderHashtags()}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default HashtagList;
