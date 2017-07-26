/// <reference path="../../typings/index.d.ts" />
import * as Router from 'koa-router';
import Comment from './comments';
import Signup from './signup';
const router = new Router();

router.use('/api', Comment.routes());
router.use('/api', Signup.routes());
export default router;
