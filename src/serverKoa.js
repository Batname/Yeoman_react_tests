"use strict";

import 'babel/polyfill';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import React from 'react';
import koa from 'koa';
import co from 'co';
import views from 'co-views';
import cors from "koa-cors";
import serve from 'koa-static';
import route from 'koa-route';

// frontend import
function getFrontendData(){
  return {
    locale: process.env.LOCALE,
    description: 'Hello server React Yo ho',
    title: 'Hello server React',
    body: React.renderToString(<div>Hello server React Yo ho</div>),
  }
}

let app = koa();

let render = views(__dirname + "/", { map: { html: 'jade' }});

app.use(cors({
  maxAge: 1000,
  credentials: true,
  methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
  headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Origin'
}));

app.init = co.wrap(function index() {
  app.listen(process.env.PORT);
  console.log("listening on port " + process.env.PORT);
});

app.use(serve('build/public'));

app.use(route.get("/", function *() {
  let body, data;
  body = yield render('index.jade', getFrontendData());
  this.status = 201;
  this.body = body;
}));

app.use(function *(next) {
  if (this.path.substr(0, 5).toLowerCase() === '/api/') {
    yield next;
    return;
  } else if (this.path.indexOf('.') !== -1) {
    return;
  } else {
    this.status = 201;
    this.body = yield render('index.jade', { locale: process.env.LOCALE });
  }
});

export default app;