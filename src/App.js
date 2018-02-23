import React, { Component } from "react";
import TweetList from "./components/Tweet/TweetList";
import UserProfile from "./components/UserProfile/UserProfile";
import HashtagList from "./components/Hashtags/HashtagList";
import Header from "./components/Header/Header";
import axios from "axios";
import "./App.css";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userquery: "",
      data: [],
      pageLoaded: false
    };
    this.searchUser = this.searchUser.bind(this);
    this.handleUserQueryUpdate = this.handleUserQueryUpdate.bind(this);
    this.renderHashTags = this.renderHashTags.bind(this);
  }
  async componentWillMount (){

  }
  handleUserQueryUpdate(event){
    this.setState({
      userquery: event.target.value
    });
  }
  async searchUser(event)  {
    event.preventDefault();
    try{
      const result = await axios.get(`/search?user=${this.state.userquery}`);
      this.setState({
        data: result.data
      });
    } catch (e){
      throw e;
    }
  }

  renderHashTags(){
    if (this.state.data.user){
      return <HashtagList hashtags={this.state.data.user.most_common_hashtags} />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="App">
        <Header search={this.searchUser} handleInput={this.handleUserQueryUpdate} searchQuery={this.state.userquery}/>
        <div className="content-wrapper">

          <UserProfile user={this.state.data.user} />
          <hr className="horizontal-rule"/>
          <div className="tweet-display">
            <TweetList heading="Latest" tweets={this.state.data.tweetData} />
            <TweetList heading="Top Tweets" tweets={this.state.data.topTweets} />
            {this.renderHashTags()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
