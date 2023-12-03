const Router = require('koa-router');

const router = new Router();

// Por el momento, dejo el valor hardcodeado, queda pendiente arreglarlo

const videos = [
    {
        name: 'demo 5',
        link: 'https://www.youtube.com/watch?v=pDGEwmnD7dM&list=RDpDGEwmnD7dM&start_radio=1',
        visualizaciones: 40,
    }
]

router.get('videos.show', '/', async ctx => {
    ctx.body = videos[0];
})

router.put('/visualizaciones', async ctx => {
    videos[0].visualizaciones += 1;
    ctx.body = videos[0];
})


module.exports = router;