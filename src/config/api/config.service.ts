import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with api config based operations.
 * @class
 */
@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {
  }

  get name(): string {
    return this.configService.get<string>('api.name');
  }

  get env(): string {
    return this.configService.get<string>('api.env');
  }

  get debug(): string {
    return this.configService.get<string>('api.debug');
  }

  get url(): string {
    return this.configService.get<string>('api.url');
  }

  get port(): number {
    return Number(this.configService.get<number>('api.port'));
  }
}