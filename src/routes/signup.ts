/// <reference path="../../typings/index.d.ts" />
import * as Router from 'koa-router';
const  mongoose = require('mongoose');
// import User from '../models/User';
import user = require('../controllers/user');
const router = new Router();

router.post('/signup', user.users);

export default router;
