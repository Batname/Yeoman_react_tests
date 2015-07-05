import React from 'react';
import AppStore from './../../stores/AppStore.js';

function getTweetItems () {
  return {items: AppStore.getTweetItems()};
}

let TweetsItems = {
  getInitialState() {
    return getTweetItems();
  },
  componentWillMount() {
    AppStore.onChange(this.onChange);
  },
  onChange() {
    this.setState(getTweetItems());
  },
  render() {
    let items = this.state.items.map((item, i) => {
      return (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.handle}</td>
          </tr>
        );
    });
    return (
        <tbody>{items}</tbody>
    );
  }
};

export default React.createClass(TweetsItems);
