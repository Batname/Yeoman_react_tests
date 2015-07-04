import React from 'react';
import styles from './Calculator.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class CalculatorResult {

  static propTypes = {
  };

  render() {

    return (
      <div className="CalculatorResult" id="calculator-result">
        <div className="content">CalculatorResult</div>
      </div>
    );
  }

}

export default CalculatorResult;
