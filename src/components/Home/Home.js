/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, {PropTypes} from 'react';
import styles from './Home.scss';
import withStyles from '../../decorators/withStyles';

import Calculator from './../Calculator';
import Tweets from './../Tweets';

@withStyles(styles)
class Home {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired
  };

  render() {
    let title = 'HOME PAGE';
    this.context.onSetTitle(title);
    return (
      <div className="Home" id="home">
        <Calculator />
        <Tweets />
      </div>
    );
  }

}

export default Home;
