import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AuthConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

/**
 * Import and provide auth configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        AUTH_NAME: Joi.string().default('My Cash Money'),
        AUTH_ENV: Joi.string().valid('local', 'production', 'test').default('local'),
        AUTH_DEBUG: Joi.boolean().valid(true, false).default(true),
        AUTH_URL: Joi.string().default('http://localhost:3000'),
        AUTH_PORT: Joi.number().default(3000),
      }),
    }),
  ],
  providers: [ConfigService, AuthConfigService],
  exports: [ConfigService, AuthConfigService],
})
export class AuthConfigModule {
}