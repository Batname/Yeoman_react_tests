/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)

class Header {

  static propTypes = {
  };

  render() {

    return (
      <div className="Header" id="header">
        <p>Header</p>
      </div>
    );
  }

}

export default Header;
