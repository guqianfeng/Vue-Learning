import { Controller, Get, Params, Query, Post, Body, Header } from "koa-ts-controllers";

@Controller('/test')
class TestController {

  @Get('/hello')
  async sayWorld () {
    return 'hello world'
  }

  // @Get('/user/:id')
  // async getUser (@Params() params: { id: number }) {
  //   return '当前params中的用户id是' + params.id
  // }

  // @Get('/user/:id')
  // async getUser (@Params('id') id: number) {
  //   return '当前params中的用户id是: ' + id
  // }

  @Get('/user')
  async getUser (@Query() query: { id: number, age: number }) {
    return `当前的query的id是${query.id}, age是${query.age}`
  }

  @Post('/user')
  async postUser (@Body() body: { username: string, password: string }, @Header() header: any) {
    console.log(body)
    console.log(header)
    return '当前提交的数据是' + JSON.stringify(body)
  }

}