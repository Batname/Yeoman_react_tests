/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Home.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Home {

  static propTypes = {
  };

  render() {

    return (
      <div className="Home" id="calculator-main">
        <div>Home</div>
      </div>
    );
  }

}

export default Home;
