import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 * @class
 */
@Injectable()
export class PostgresConfigService {
  constructor(private configService: ConfigService) {
  }

  get host(): string {
    return this.configService.get<string>('postgres.host');
  }

  get username(): string {
    return this.configService.get<string>('postgres.username');
  }

  get password(): string {
    return this.configService.get<string>('postgres.password');
  }

  get port(): string {
    return this.configService.get<string>('postgres.port');
  }

  get database(): number {
    return Number(this.configService.get<number>('postgres.database'));
  }
}