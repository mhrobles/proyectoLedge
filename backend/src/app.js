const Koa = require('koa');
const { default: koaBody } = require('koa-body');
const KoaLogger = require('koa-logger');
const cors = require('@koa/cors');

const router = require('./routes');

const app = new Koa();

app.use(cors())

app.use(KoaLogger());
app.use(koaBody());

app.use(router.routes());

app.listen(3002, () => {
    console.log('server is running at http://localhost:3002');
    });

module.exports = app;