import React from 'react';
import styles from './Tweets.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Tweets {

  static propTypes = {
  };

  render() {

    return (
      <div className="Tweets" id="tweets">
        <div className="content">Tweets</div>
      </div>
    );
  }

}

export default Tweets;
