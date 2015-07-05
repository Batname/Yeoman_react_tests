import React from 'react';

let TweetsItems = {
  getInitialState() {
    return {
      items: [{name: 'Bat', message: 'Hello'}, {name: 'Den', message: 'Bay'}]
    };
  },
  render() {
    let items = this.state.items.map((item) => {
      return (
          <tr>
            <td>{item.name}</td>
            <td>{item.message}</td>
          </tr>
        );
    });
    return (
        <span>{items}</span>
    );
  }
};

export default React.createClass(TweetsItems);
