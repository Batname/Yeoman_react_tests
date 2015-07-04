/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Footer.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)

class Footer {

  static propTypes = {
  };

  render() {

    return (
      <div className="Footer" id="footer">
        <p>Footer</p>
      </div>
    );
  }

}

export default Footer;
