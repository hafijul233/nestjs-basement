import { Injectable } from '@nestjs/common';
import { comparePassword, hashPassword } from './common/helpers/utilities/password.helper';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return await hashPassword('1234');
  }
  async getCompare(): Promise<boolean> {
    return await comparePassword('1234', '$2b$10$XcVA0ddQ7je5LCo0iYO.2Oc/lHSj1Zs0nlb5tJ8JGNR8fCkabhj0m');
  }
}
