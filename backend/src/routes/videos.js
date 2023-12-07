const Router = require('koa-router');

const router = new Router();

// muestra la informacion de un video
router.get('video/:id', async ctx => {
    try {
        const video = await ctx.orm.Videos.findByPk(ctx.params.id);
        ctx.body = video;
    }
    catch (error) {
        console.log(error);
    }
})

// muestra la informacion de todos los videos guardados
router.get('', async ctx => {
    try {
        const videos = await ctx.orm.Videos.findAll();
        ctx.body = videos;
    }
    catch (error) {
        console.log(error);
    }
})

// agrega una visualización al video de ese id y luego entrega la información actualizada
router.get('video/:id/visto', async ctx => {
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

// entrega el id, name y img de todos los videos 
router.get('datos', async ctx => {
    try {
        const videos = await ctx.orm.Videos.findAll({
            attributes: ['id', 'name', 'img']
        });
        ctx.body = videos;
    }
    catch (error) {
        console.log(error);
    }
})

module.exports = router;