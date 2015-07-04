/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Home.scss';
import withStyles from '../../decorators/withStyles';

import Calculator from './../Calculator';
import Tweets from './../Tweets';

@withStyles(styles)
class Home {

  static propTypes = {
  };

  render() {

    return (
      <div className="Home" id="home">
        <Calculator />
        <Tweets />
      </div>
    );
  }

}

export default Home;
