import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 * @class
 */
@Injectable()
export class MysqlConfigService {
  constructor(private configService: ConfigService) {
  }

  get host(): string {
    return this.configService.get<string>('mysql.host');
  }

  get username(): string {
    return this.configService.get<string>('mysql.username');
  }

  get password(): string {
    return this.configService.get<string>('mysql.password');
  }

  get port(): string {
    return this.configService.get<string>('mysql.port');
  }

  get database(): number {
    return Number(this.configService.get<number>('mysql.database'));
  }
}