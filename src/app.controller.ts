import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// Router 역할

@Controller('/abc')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hi') // GET /abc/hi
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello') // POST /abc/hello
  postHello(): string {
    return this.appService.getHello();
  }
}
