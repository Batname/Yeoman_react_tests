import React from 'react';
import calculatorWatchMixin from '../../mixins/calculatorWatchMixin';
import CalculatorStore from './../../stores/CalculatorStore';

function getCatalog () {
  return {result: CalculatorStore.getResult()};
}

let CalculatorResult = {
  mixins: [calculatorWatchMixin(getCatalog)],
  render() {
    // console.log('render', this.state.result);
    return (
      <div className="CalculatorResult" id="calculator-result">
        <div className="content">
         <div className="output">
          <span className="inner">{this.state.result.value}</span>
         </div>
        </div>
      </div>
    );
  }
};

export default React.createClass(CalculatorResult);


/*
import co from 'co';
import Q from 'q';
function getResult(value){
  let deferred = Q.defer();
  setTimeout(() => {
    deferred.resolve(value);
  }, 1000);
  return deferred.promise;
}
update(value){
  this.setState({result: value});
},
componentWillMount(){
  let self = this;
  co(function* (){
    let result;
    result = yield getResult(10);
    self.update(result);
    result = yield getResult(20);
    self.update(result);
    result = yield getResult(30);
    self.update(result);
    return result;
  }).then(()=>{
  }, (err) => {
    console.error(err.stack);
  });
},

 */
