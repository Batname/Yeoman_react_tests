import React from 'react';
import CalculatorInput from './CalculatorInput.js';
import CalculatoResult from './CalculatoResult.js';
import styles from './Calculator.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Calculator {

  static propTypes = {
  };

  render() {

    return (
      <div className="Calculator" id="calculator">
        <CalculatoResult />
        <CalculatorInput />
      </div>
    );
  }

}

export default Calculator;
