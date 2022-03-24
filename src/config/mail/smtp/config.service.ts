import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with smtp config based operations.
 * @class
 */
@Injectable()
export class SmtpConfigService {
  constructor(private configService: ConfigService) {
  }

  get host(): string {
    return this.configService.get<string>('smtp.host');
  }

  get username(): string {
    return this.configService.get<string>('smtp.username');
  }

  get password(): string {
    return this.configService.get<string>('smtp.password');
  }

  get port(): string {
    return this.configService.get<string>('smtp.port');
  }

  get encryption(): number {
    return Number(this.configService.get<number>('smtp.encryption'));
  }
}