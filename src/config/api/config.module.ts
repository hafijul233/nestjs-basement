import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { ApiConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        API_NAME: Joi.string().default('My Cash Money'),
        API_ENV: Joi.string().valid('local', 'production', 'test').default('local'),
        API_DEBUG: Joi.boolean().valid(true, false).default(true),
        API_URL: Joi.string().default('http://localhost:3000'),
        API_PORT: Joi.number().default(3000),
      }),
    }),
  ],
  providers: [ConfigService, ApiConfigService],
  exports: [ConfigService, ApiConfigService],
})
export class ApiConfigModule {
}