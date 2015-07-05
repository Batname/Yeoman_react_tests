/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

var pages = {};
var loading = false;
var tweets = [{name: 'Bat', handle: 'Hello'}, {name: 'Den', handle: 'Bay'}, {name: 'Darian', handle: 'Yep'}];

var AppStore = Object.assign({}, EventEmitter.prototype, {

  isLoading() {
    return loading;
  },

  /**
   * Gets page data by the given URL path.
   *
   * @param {String} path URL path.
   * @returns {*} Page data.
   */
  getPage(path) {
    return path in pages ? pages[path] : null;
  },

  /**
   * Emits change event to all registered event listeners.
   *
   * @returns {Boolean} Indication if we've emitted an event.
   */
  emitChange() {
    return this.emit(CHANGE_EVENT);
  },

  /**
   * Register a new change event listener.
   *
   * @param {function} callback Callback function.
   */
  onChange(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Remove change event listener.
   *
   * @param {function} callback Callback function.
   */
  off(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getTweetItems() {
    return tweets;
  },

  addTweet(tweet){
    tweets.push(tweet);
  }

});

AppStore.dispatchToken = Dispatcher.register((action) => {

  switch (action.type) {

    case ActionTypes.GET_PAGE:
      loading = true;
      AppStore.emitChange();
      break;

    case ActionTypes.RECEIVE_PAGE:
      loading = false;
      if (!action.err) {
        pages[action.page.path] = action.page;
      }
      AppStore.emitChange();
      break;

    case ActionTypes.LOAD_TWEETS:
      loading = true;
      let tweet = _.assign({}, {name: action.data.user.name, handle: action.data.message});
      AppStore.addTweet(tweet);
      AppStore.emitChange();
      break;

    default:
      // Do nothing
  }

});

export default AppStore;
