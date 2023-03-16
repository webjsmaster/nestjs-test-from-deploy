import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ICards } from "./consts";

@Controller('cards')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ICards[] {
    return this.appService.getHello();
  }
}
