/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */


import http from 'superagent';
import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import Request from '../core/Request';
import _ from 'lodash';

let urls = [];

let getTweets = function* () {
  let data;
  try {
    let i = 0;
    let y = urls.length;
    while(i < y){
      data = yield Request.get(urls[i]);
      Dispatcher.dispatch({
        type: ActionTypes.LOAD_TWEETS,
        data
      });
      i++;
    }
  }
  catch (err) {
    console.log( 'Do something with this:', err);
  }
};

export default {

  navigateTo(path, options) {
    this.loadPage(path, () => {
      if (canUseDOM) {
        if (options && options.replace) {
          window.history.replaceState({}, document.title, path);
        } else {
          window.history.pushState({}, document.title, path);
        }
      }

      Dispatcher.dispatch({
        type: ActionTypes.CHANGE_LOCATION,
        path
      });
    });
  },

  loadPage(path, cb) {
    Dispatcher.dispatch({
      type: ActionTypes.GET_PAGE,
      path
    });

    http.get('/api/query?path=' + encodeURI(path))
      .accept('application/json')
      .end((err, res) => {
        Dispatcher.dispatch({
          type: ActionTypes.RECEIVE_PAGE,
          path,
          err,
          page: res ? res.body : null
        });
        if (cb) {
          cb();
        }
      });
  },
  loadTweets(urlsarr){
    urls = _.cloneDeep(urlsarr);
    Request.runGenerator(getTweets);
  }

};
