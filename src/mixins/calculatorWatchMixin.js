import CalculatorStore from '../stores/CalculatorStore';

let calculatorWatchMixin = (cb) =>{
  return {
    getInitialState() {
      return cb(this);
    },
    componentWillMount() {
      CalculatorStore.addChangeListener(this.onChange);
    },
    componentWillUnount(){
      CalculatorStore.removeChangeListener(this.onChange);
    },
    onChange() {
      this.setState(cb(this));
    }
  };
};

export default calculatorWatchMixin;
