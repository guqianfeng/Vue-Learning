import { Controller, Post, Body } from "koa-ts-controllers"

import { RegisterBody } from '../validators/User' 

@Controller('/user')
export class UserController {

  @Post('/register')
  async register (
    @Body() body: RegisterBody
  ) {

  }

}