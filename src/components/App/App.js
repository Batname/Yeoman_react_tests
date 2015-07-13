/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.scss';
import withDebugger from '../../decorators/withDebugger';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';

const pages = {Home};

@withContext
@withDebugger
@withStyles(styles)
class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  }
  render(){
    let component;

    switch (this.props.path) {
      case `${window.GlobalConstants.basePath}`:
      case 'flexcalculator':
        component = React.createElement(pages.Home);
        break;
    }
    return (
            <div>
              <Header />
              {component}
              <Footer />
            </div>
           );
  }
}

export default App;
