const router = require('koa-router')()

router.prefix('/users')

let users = [
  {
    id: 1,
    name: "gqf",
    age: 28,
  },
  {
    id: 2,
    name: "张三",
    age: 12,
  },
  {
    id: 3,
    name: "李四",
    age: 40,
  },
  {
    id: 4,
    name: "王五",
    age: 35,
  },
  {
    id: 5,
    name: "赵六",
    age: 8,
  }

]

router.get('/', function (ctx, next) {
  // ctx.body = 'this is a users response!'
  let sort = ctx.query.sort;
  if(sort){
    if(sort === "asc"){
      ctx.body = users.slice(0).sort((a, b) => a.age - b.age)
    }else{
      ctx.body = users.slice(0).sort((a, b) => b.age - a.age)
    }
  }else{
    ctx.body = users;
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/:id', (ctx, next) => {
  let id = ctx.params.id;
  let user = users.find(item => item.id == id);
  ctx.body = user;
})

module.exports = router
