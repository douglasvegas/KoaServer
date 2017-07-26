import * as Config from 'config-lite';
import mongoose = require('mongoose');
import Bluebird = require('bluebird');
import autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = Bluebird;
const dbURL = 'mongodb://localhost:27017/doge';
mongoose.connect(dbURL);
const db = mongoose.connection;
// 自增ID初始化
autoIncrement.initialize(db);

db.on('error', console.error.bind('console', 'Connection error:'));
db.once('open', () => {
  console.log("Db open!");
});
const User = require('../models/User');
// export const mongo = db;
// 用户信息
// const UserSchema = new mongoose.Schema({
//   name: {type: String, index: {unique: true}},
//   avatar: String,
//   gender: Number,
//   age: Number,
//   ID: Number
// }, {
//   versionKey: false
// });

// const User = mongoose.model('User', UserSchema, 'User');
export default User;
