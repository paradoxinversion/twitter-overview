
import React from 'react';
import Hashtag from "./Hashtag";
var converter = require('number-to-words');

class HashtagList extends React.Component{
  constructor(props){
    super(props);
    this.renderHashtags = this.renderHashtags.bind(this);
  }
  renderHashtags(){
    if (this.props.hashtags === 0){
      return <p> There are no hashtags to return </p>;
    } else{
      const hashtags = this.props.hashtags.map((hashtag) => {
        return <Hashtag key={hashtag[0]} hashtag={hashtag}/>
      });
      return (
        <div className="hashtag-list">
          {hashtags}
        </div>
      )
    }
  }
  render(){
    if (this.props.hashtags){
      return (
        <div>
          {this.renderHashtags()}
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
};

export default HashtagList;
