import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import {Calculator} from '../constants/ActionTypes';
//import _ from 'lodash';

const CHANGE_EVENT = 'change';
let result = {value: 0};

function setResult(options){
  if(!result.value){
    result.value = options.value.toString();
  } else {
    result.value += options.value.toString();
  }
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
    console.log(callback);
  }
});

CalculatorStore.dispatchToken = Dispatcher.register((action) => {

  switch (action.type) {
    case Calculator.SET_NUMBER:
      setResult(action.options);
      CalculatorStore.emitChange();
      break;

    default:
      // Do nothing
  }

});

export default CalculatorStore;
