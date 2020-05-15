import { Controller, Get } from "koa-ts-controllers";

@Controller('/test')
class TestController {

  @Get('/hello')
  async sayWorld () {
    return 'hello world'
  }

}