import React from 'react';
// import _ from 'lodash';
import CalculatorButton from './CalculatorButton';

// class CalculatorActions{
//   constructor(elem){
//     _.assign(this, elem);
//     this.elem = elem;
//   }
//   addEventListener(){
//     this.elem.addEventListener('click', this.handleClick.bind(this));
//   }
//   handleClick(event){
//     let attr = 'data-calculator-target';
//     if (!event.target.hasAttribute(attr)){
//       return;
//     }
//     let target = event.target;
//     let action = target.getAttribute(attr);
//     if (action) {
//       this[action](target.innerHTML);
//     }
//   }
//   divide(inner){
//     console.log('divide', inner);
//   }
//   multiply(inner){
//     console.log('multiply', inner);
//   }
//   subtract(inner){
//     console.log('subtract', inner);
//   }
//   add(inner){
//     console.log('add', inner);
//   }
//   number(inner){
//     console.log('number', inner);
//   }
// }

function getState () {
  return {
            0: {value: 0, type: 'number'},
            1: {value: 1, type: 'number'},
            2: {value: 2, type: 'number'},
            3: {value: 3, type: 'number'},
            4: {value: 4, type: 'number'},
            5: {value: 5, type: 'number'},
            6: {value: 6, type: 'number'},
            7: {value: 7, type: 'number'},
            8: {value: 8, type: 'number'},
            9: {value: 9, type: 'number'},
            divide: {value: '÷', type: 'divide'},
            multiply: {value: '×', type: 'multiply'},
            subtract: {value: '-', type: 'subtract'},
            add: {value: '+', type: 'add'},
            point: {value: '.', type: 'point'},
            equal: {value: '=', type: 'equal'}
          };
}

let CalculatorInput = {
  getInitialState(){
    return getState();
  },
  componentWillMount(){

  },
  componentDidMount(){
    //let elem = this.getDOMNode();
    //let actions = new CalculatorActions(elem);
    //actions.addEventListener();
  },
  render() {
    return (
      <div className="CalculatorInput" id="calculator-input">
        <div className="content">
          <table className="tables calculator-table">
            <thead></thead>
            <tbody>
              <tr className="row">
                <td className="col"><CalculatorButton input={this.state['7']} /></td>
                <td className="col"><CalculatorButton input={this.state['8']} /></td>
                <td className="col"><CalculatorButton input={this.state['9']} /></td>
                <td className="col"><CalculatorButton input={this.state.divide} /></td>
              </tr>
              <tr className="row">
                <td className="col"><CalculatorButton input={this.state['4']} /></td>
                <td className="col"><CalculatorButton input={this.state['5']} /></td>
                <td className="col"><CalculatorButton input={this.state['6']} /></td>
                <td className="col"><CalculatorButton input={this.state.multiply} /></td>
              </tr>
              <tr className="row">
                <td className="col"><CalculatorButton input={this.state['1']} /></td>
                <td className="col"><CalculatorButton input={this.state['2']} /></td>
                <td className="col"><CalculatorButton input={this.state['3']} /></td>
                <td className="col"><CalculatorButton input={this.state.subtract} /></td>
              </tr>
              <tr className="row">
                <td className="col"><CalculatorButton input={this.state['0']} /></td>
                <td className="col"><CalculatorButton input={this.state.point} /></td>
                <td className="col"><CalculatorButton input={this.state.equal} /></td>
                <td className="col"><CalculatorButton input={this.state.add} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default React.createClass(CalculatorInput);
