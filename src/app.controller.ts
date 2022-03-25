import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('/')
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
  @Get('/compare')
  async getCompare(): Promise<boolean> {
    return await this.appService.getCompare();
  }
}
