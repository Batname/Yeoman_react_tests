import React from 'react';
import AppActions from './../../actions/AppActions';
import _ from 'lodash';

let urls = ['https://api.myjson.com/bins/2qjdn', 'https://api.myjson.com/bins/3zjqz', 'https://api.myjson.com/bins/29e3f'];

let LoadTweets = {
  update(){
    AppActions.loadTweets(urls);
    urls = _.flatten([urls, urls]);
  },
  render(){
    return (
      <div>
        <button className="button" onClick={this.update}>Load more tweets</button>
      </div>
      );
  }
};

export default React.createClass(LoadTweets);
