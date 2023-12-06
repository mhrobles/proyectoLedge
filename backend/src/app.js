const Koa = require('koa');
const { default: koaBody } = require('koa-body');
const KoaLogger = require('koa-logger');
const cors = require('@koa/cors');
const orm = require('./models');

const router = require('./routes');

const app = new Koa();

app.use(cors())

app.context.orm = orm;

app.use(KoaLogger());
app.use(koaBody());

app.use(router.routes());

module.exports = app;