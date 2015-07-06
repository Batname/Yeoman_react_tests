import React from 'react';
import styles from './Tweets.scss';
import withStyles from '../../decorators/withStyles';
import TweetsItems from './TweetsItems.js';
import LoadTweets from './LoadTweets.js';

@withStyles(styles)
class Tweets {

  static defaultProps = {
    maxLines: 1
  };
  render() {
    return (
      <div className="Tweets" id="tweets">
        <div className="content">
          <div className ="table">
            <table className="table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Message</th>
                </tr>
              </thead>
              <TweetsItems label="TweetsItems"/>
            </table>
          </div>
          <LoadTweets />
        </div>
      </div>
    );
  }
}

export default Tweets;
