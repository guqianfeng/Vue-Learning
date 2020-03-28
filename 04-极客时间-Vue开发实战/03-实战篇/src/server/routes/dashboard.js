const router = require('koa-router')()

router.prefix('/dashboard')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a dashboard response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a dashboard/bar response'
})

router.get('/chart', function (ctx, next) {
  ctx.body = [10, 20, 30, 40, 50, 60]
})

module.exports = router
