import React from 'react';
import styles from './Tweets.scss';
import withStyles from '../../decorators/withStyles';
import TweetsItems from './TweetsItems.js';

@withStyles(styles)
class Tweets {

  static defaultProps = {
    maxLines: 1
  };
  render() {
    return (
      <div className="Tweets" id="tweets">
        <div className="content">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              <TweetsItems />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Tweets;
