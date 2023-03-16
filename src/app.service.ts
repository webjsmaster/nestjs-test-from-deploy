import { Injectable } from '@nestjs/common';
import { cards, ICards } from './consts';

@Injectable()
export class AppService {
  getHello(): ICards {
    return cards
  }
}
