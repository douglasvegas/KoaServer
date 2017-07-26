import mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
// 用户信息
const UserSchema = new mongoose.Schema({
  name: {type: String, index: {unique: true}},
  avatar: String,
  gender: Number,
  age: Number,
  ID: Number
}, {
  versionKey: false
});
autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, {
  model: 'User',
  field: 'ID',
  startAt: 211,
  incrementBy: 1
});
const User = mongoose.model('User', UserSchema, 'User');
module.exports = User;
