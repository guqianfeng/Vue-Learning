const router = require('koa-router')()
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../data/user.json");

router.prefix('/users')

router.get('/', function (ctx, next) {
  // ctx.body = 'this is a users response!'
  let users = JSON.parse(fs.readFileSync(dbPath));
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
  let users = JSON.parse(fs.readFileSync(dbPath));
  let user = users.find(item => item.id == id);
  ctx.body = user;
})

router.post("/", function(ctx, next){
  let user = ctx.request.body;
  if(!user.name){
    ctx.body = {
      code: 0,
      msg: "用户名不能为空"
    }
    return;
  }else{
    let users = JSON.parse(fs.readFileSync(dbPath));
    user.id = Date.now();
    users.unshift(user)
    let result = JSON.stringify(users);
    fs.writeFileSync(dbPath, result)
    ctx.body = {
      code: 1,
      msg: "添加成功",
      user,
    }
  }
})

router.delete("/:id", function(ctx, next){
  let id = ctx.params.id;
  let users = JSON.parse(fs.readFileSync(dbPath));
  users = users.filter(user => user.id != id);
  let result = JSON.stringify(users);
  fs.writeFileSync(dbPath, result)
  ctx.body = {
      code: 1,
      msg: "删除成功"
  }
})

module.exports = router
