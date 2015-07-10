import {Calculator} from '../constants/ActionTypes';
import Dispatcher from '../core/Dispatcher';

let CalculatorActions = {
  number(options){
    Dispatcher.dispatch({
      type: Calculator.SET_NUMBER,
      options
    });
  },
  divide(options){
    console.log(options, 'CalculatorActions');
  },
  multiply(options){
    console.log(options, 'CalculatorActions');
  },
  subtract(options){
    console.log(options, 'CalculatorActions');
  },
  add(options){
    console.log(options, 'CalculatorActions');
  },
  point(options){
    console.log(options, 'CalculatorActions');
  },
  equal(options){
    console.log(options, 'CalculatorActions');
  }
};

export default CalculatorActions;
