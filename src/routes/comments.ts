/// <reference path="../../typings/index.d.ts" />
import * as Router from 'koa-router';
const router = new Router();

router.get('/comments', (ctx) => {
  ctx.body = {a: 1};
});

export default router;
