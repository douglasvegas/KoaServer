/// <reference path="../../typings/index.d.ts" />
import * as Router from 'koa-router';
import Comment from './comments';
const router = new Router();

router.use('/api', Comment.routes());

export default router;
