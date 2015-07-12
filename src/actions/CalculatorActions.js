import CalculatorTypes from '../constants/CalculatorTypes';
import Dispatcher from '../core/Dispatcher';

let CalculatorActions = {
  number(options){
    Dispatcher.dispatch({
      type: CalculatorTypes.NUMBER_ACTION,
      options
    });
  },
  divide(options){
    Dispatcher.dispatch({
      type: CalculatorTypes.DEVIDE_ACTION,
      options
    });
  },
  multiply(options){
    Dispatcher.dispatch({
      type: CalculatorTypes.MYLTIPLY_ACTION,
      options
    });
  },
  subtract(options){
    Dispatcher.dispatch({
      type: CalculatorTypes.SUBTRACT_ACTION,
      options
    });
  },
  add(options){
    Dispatcher.dispatch({
      type: CalculatorTypes.ADD_ACTION,
      options
    });
  },
  point(options){
    console.log(options, 'CalculatorActions');
  },
  equal(options){
    Dispatcher.dispatch({
      type: CalculatorTypes.RESULT_ACTION,
      options
    });
  }
};

export default CalculatorActions;
