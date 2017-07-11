/// <reference path="../typings/index.d.ts" />
import * as Koa from 'koa';
import route from './routes/index';
const app = new Koa();

app.use(route.routes());
app.use((ctx) => {
  ctx.body = 'Hello World1';
});

app.listen(3000);
