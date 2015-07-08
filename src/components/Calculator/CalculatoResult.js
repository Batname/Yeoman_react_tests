import React from 'react';
import co from 'co';
import Q from 'q';

function getResult(value){
  let deferred = Q.defer();
  setTimeout(() => {
    deferred.resolve(value);
  }, 1000);
  return deferred.promise;
}

let CalculatorResult = {

  getInitialState(){
    return {
      result: 0
    };
  },

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

  render() {
    return (
      <div className="CalculatorResult" id="calculator-result">
        <div className="content">{this.state.result}</div>
      </div>
    );
  }
};

export default React.createClass(CalculatorResult);
