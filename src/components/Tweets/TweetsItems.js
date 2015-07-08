import React, {PropTypes} from 'react';
import AppStore from './../../stores/AppStore.js';
import _ from 'lodash';

function getTweetItems () {
  return {items: AppStore.getTweetItems()};
}

let TweetsItemsMixin = {
  componentWillMount() {
    AppStore.onChange(this.onChange);
  },
  propTypes: {
    label: PropTypes.string
  },
  getDefaultProps() {
    return {
      count: 3
    };
  },
  componentDidMount(){
  }
};

let TweetsItems = {
  mixins: [TweetsItemsMixin],
  getInitialState() {
    return getTweetItems();
  },
  onChange() {
    this.setState(getTweetItems());
    let row = React.findDOMNode(this.refs.newRow);
    row.classList.add('highlight');
    let offsetLeft = row.offsetLeft;
    let offsetTop = row.offsetTop;
    window.scrollTo(offsetLeft, offsetTop);
  },
  render() {
    let items = _.map(this.state.items, (item, i) => {
      return (
          <tr key={i} ref="newRow">
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
