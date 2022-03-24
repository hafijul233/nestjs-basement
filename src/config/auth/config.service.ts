import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with auth config based operations.
 * @class
 */
@Injectable()
export class AuthConfigService {
  constructor(private configService: ConfigService) {
  }

  get name(): string {
    return this.configService.get<string>('auth.name');
  }

  get env(): string {
    return this.configService.get<string>('auth.env');
  }

  get debug(): string {
    return this.configService.get<string>('auth.debug');
  }

  get url(): string {
    return this.configService.get<string>('auth.url');
  }

  get port(): number {
    return Number(this.configService.get<number>('auth.port'));
  }
}