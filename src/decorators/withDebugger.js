
import React from 'react';

function withDebugger(ContentToDebug){
  return class WithDebugger{
    render(){
      console.dir(this);
      return <ContentToDebug {...this.props}/>;
    }
  };
}

export default withDebugger;
