import React from 'react';
import styles from './Calculator.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class CalculatorInput {

  static propTypes = {
  };

  render() {

    return (
      <div className="CalculatorInput" id="calculator-input">
        <div className="content">CalculatorInput</div>
      </div>
    );
  }

}

export default CalculatorInput;
