const Router = require('koa-router');
const videos = require('./routes/videos');

const router = new Router();

router.use('/', videos.routes())

module.exports = router;