import _ from 'lodash';

class Operations{
  constructor(obj){
    _.assign(this, obj);
  }
  addAction(val){
    return parseInt(val) + parseInt(this.value);
  }
  subtractAction(val){
    return parseInt(val) - parseInt(this.value);
  }
  multiplyAction(val){
    return parseInt(val) * parseInt(this.value);
  }
  divideAction(val){
    return parseInt(val) / parseInt(this.value);
  }
}

class Total{
  constructor(options, operations){
    _.assign(this, {options: options}, {operations: operations});
  }
  getTotal(){
    return _.reduce(this.operations, function(total, obj) {
      let operation = new Operations(obj);
      if(!obj.type){
        return parseInt(obj.value);
      }
      return operation[`${obj.type}Action`](total);
    }, []);
  }
}

export default Total;
