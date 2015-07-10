import React, { PropTypes } from 'react';
import CalculatorActions from '../../actions/CalculatorActions';

let CalculatorButton = {
  propTypes: {
    input: PropTypes.object
  },
  handleClick: function(){
    CalculatorActions[this.props.input.type](this.props.input);
  },
  render(){
    return (
        <span>
          <button data-calculator-target="number" className="field" onClick={this.handleClick}>{this.props.input.value}</button>
        </span>
      );
  }
};

export default React.createClass(CalculatorButton);
