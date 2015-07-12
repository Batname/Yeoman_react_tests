import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import CalculatorTypes from '../constants/CalculatorTypes';
import _ from 'lodash';
import Total from '../models/Total';

const CHANGE_EVENT = 'change';
let result = {value: 0};
let operations = [];
let counter = 0;
var complete = false;

function setResult(){
  let sequence = _.map(operations, (obj) => {
    return `${obj.symbol || ''}${obj.value || ''}`;
  });
  return _.compact(sequence).join('');
}

function actionHelper(options){
  if(_.isEmpty(operations[counter]) || !operations[counter].value){
    return;
  }
  counter++;
  operations[counter] = {};
  operations[counter].symbol = options.symbol;
  operations[counter].type = options.type;
  result.value = setResult();
}

function setNumber(options){
  if(_.isEmpty(operations[counter])){
    operations[counter] = {};
    operations[counter].value = options.value.toString();
  } else{
    let value = operations[counter].value;
    operations[counter].value = (value && !complete) ? value + options.value.toString() : options.value.toString();
  }
  complete = false;
  result.value = setResult();
}

function resultAction(options) {
  if(_.isEmpty(operations)){
    return;
  }
  let total = new Total(options, operations);
  operations = [];
  counter = 0;
  complete = true;
  operations[counter] = {};
  result.value = operations[counter].value = total.getTotal();
}

let CalculatorStore = Object.assign({}, EventEmitter.prototype, {
  getResult(){
    return result;
  },
  emitChange(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  onChange(callback) {
    this.on(CHANGE_EVENT, callback);
  }
});

CalculatorStore.dispatchToken = Dispatcher.register((action) => {

  switch (action.type) {
    case CalculatorTypes.NUMBER_ACTION:
      setNumber(action.options);
      break;
    case CalculatorTypes.ADD_ACTION:
      actionHelper(action.options);
      break;
    case CalculatorTypes.SUBTRACT_ACTION:
      actionHelper(action.options);
      break;
    case CalculatorTypes.MYLTIPLY_ACTION:
      actionHelper(action.options);
      break;
    case CalculatorTypes.DEVIDE_ACTION:
      actionHelper(action.options);
      break;
    case CalculatorTypes.RESULT_ACTION:
      resultAction(action.options);
      break;
    default:
      // Do nothing
  }

  CalculatorStore.emitChange();

});

export default CalculatorStore;
