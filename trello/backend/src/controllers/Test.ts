import { Controller, Get, Params, Query, Post, Body, Header, Ctx } from "koa-ts-controllers";

import { IsNumberString, IsNotEmpty } from 'class-validator'

import { Context } from 'koa'

import Boom from '@hapi/Boom'

class GetUsersQuery {

  @IsNumberString()
  page: number

}

class PostUserBody {

  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  password: string

}

@Controller('/test')
class TestController {

  // @Get('/hello')
  // async sayWorld () {
  //   return 'hello world'
  // }

  // @Get('/user/:id')
  // async getUser (@Params() params: { id: number }) {
  //   return '当前params中的用户id是' + params.id
  // }

  @Get('/user/:id(\\d+)')
  async getUser (@Params('id') id: number) {
    return '当前params中的用户id是: ' + id
  }

  // @Get('/user')
  // async getUser (@Query() query: { id: number, age: number }) {
  //   return `当前的query的id是${query.id}, age是${query.age}`
  // }

  @Post('/user')
  async postUser (
    @Ctx() ctx: Context,
    @Body() body: PostUserBody, 
    @Header() header: any
  ) {
    console.log(body)
    console.log(header)
    // return '当前提交的数据是' + JSON.stringify(body)
    ctx.status = 201
    return {
      id: Math.random().toString(16).substring(2),
      username: body.username,
      time: Date.now()
    }
  }

  @Get('/hello')
  async sayWorld (a: any) {
    // console.log(a.b)
    return 'hello world'
  }

  @Get('/users')
  async getUsers (@Query() query: GetUsersQuery) {
    console.log(query)
    if (true) {
      throw Boom.notFound('各种业务逻辑错误', '补充错误说明')
    }
    return `传过来的query: ${JSON.stringify(query)}`
  }
}