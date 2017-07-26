/// <reference path="../typings/index.d.ts" />
import * as Koa from 'koa';
import route from './routes/index';
import mongo = require('./lib/mongo');
import autoIncrement = require('mongoose-auto-increment');
const app = new Koa();
import * as Config from 'config-lite';
import Bluebird = require('bluebird');
// 链接数据库
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const db = 'mongodb://localhost:27017/doge';

/**
 * mongoose连接数据库
 * @type {[type]}
 */
mongoose.Promise = require('bluebird');
mongoose.connect(db);

/**
 * 获取数据库表对应的js对象所在的路径
 * @type {[type]}
 */
// require('./models/User');

app.use(route.routes());
app.use((ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000,  () => {
  console.log('Server on port 3000!');
});
