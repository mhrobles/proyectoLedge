const Router = require('koa-router');

const router = new Router();

router.get('videos.show', '/:id', async ctx => {
    try {
        const video = await ctx.orm.Videos.findByPk(ctx.params.id);
        ctx.body = video;
    }
    catch (error) {
        console.log(error);
    }
})

router.get('videos.show', '/:id/visualizaciones', async ctx => {
    try {
        const video = await ctx.orm.Videos.findByPk(ctx.params.id);
        if (video) {
            video.visualizaciones += 1;
            await video.save();
            ctx.body = video;
        } else {
            ctx.status = 404;
            ctx.body = "Video not found";
        }
    }
    catch (error) {
        console.log(error);
        ctx.status = 500;
        ctx.body = "Server error";
    }
})

router.put('/visualizaciones', async ctx => {
    videos[0].visualizaciones += 1;
    ctx.body = videos[0];
})


module.exports = router;