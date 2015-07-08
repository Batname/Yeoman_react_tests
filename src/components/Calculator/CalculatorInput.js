import React from 'react';
import _ from 'lodash';

class CalculatorActions{
  constructor(elem){
    _.assign(this, elem);
    this.elem = elem;
  }
  addEventListener(){
    this.elem.addEventListener('click', this.handleClick.bind(this));
  }
  handleClick(event){
    let attr = 'data-calculator-target';
    if (!event.target.hasAttribute(attr)){
      return;
    }
    let target = event.target;
    let action = target.getAttribute(attr);
    if (action) {
      this[action](target.innerHTML);
    }
  }
  divide(inner){
    console.log('divide', inner);
  }
  multiply(inner){
    console.log('multiply', inner);
  }
  subtract(inner){
    console.log('subtract', inner);
  }
  add(inner){
    console.log('add', inner);
  }
  number(inner){
    console.log('number', inner);
  }
}

let CalculatorInput = {
  componentDidMount(){
    let elem = this.getDOMNode();
    let actions = new CalculatorActions(elem);
    actions.addEventListener();
  },
  render() {
    return (
      <div className="CalculatorInput" id="calculator-input">
        <div className="content">
          <table className="tables calculator-table">
            <thead></thead>
            <tbody>
              <tr className="row">
                <td className="col"><button data-calculator-target="number" className="field">7</button></td>
                <td className="col"><button data-calculator-target="number" className="field">8</button></td>
                <td className="col"><button data-calculator-target="number" className="field">9</button></td>
                <td className="col"><button data-calculator-target="divide" className="field">÷</button></td>
              </tr>
              <tr className="row">
                <td className="col"><button data-calculator-target="number" className="field">4</button></td>
                <td className="col"><button data-calculator-target="number" className="field">5</button></td>
                <td className="col"><button data-calculator-target="number" className="field">6</button></td>
                <td className="col"><button data-calculator-target="multiply" className="field">×</button></td>
              </tr>
              <tr className="row">
                <td className="col"><button data-calculator-target="number" className="field">1</button></td>
                <td className="col"><button data-calculator-target="number" className="field">2</button></td>
                <td className="col"><button data-calculator-target="number" className="field">3</button></td>
                <td className="col"><button data-calculator-target="subtract" className="field">-</button></td>
              </tr>
              <tr className="row">
                <td className="col"><button data-calculator-target="number" className="field">0</button></td>
                <td className="col"><button data-calculator-target="number" className="field">.</button></td>
                <td className="col"><button data-calculator-target="number" className="field">=</button></td>
                <td className="col"><button data-calculator-target="add" className="field">+</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default React.createClass(CalculatorInput);
