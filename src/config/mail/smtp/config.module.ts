import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SmtpConfigService } from './config.service';

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
        MAIL_HOST: Joi.string().default('127.0.0.1'),
        MAIL_USERNAME: Joi.string().default(''),
        MAIL_PASSWORD: Joi.string().default(''),
        MAIL_PORT: Joi.number().default(2525),
        MAIL_ENCRYPTION: Joi.string().valid('ssl', 'tls').default('ssl'),
      }),
    }),
  ],
  providers: [ConfigService, SmtpConfigService],
  exports: [ConfigService, SmtpConfigService],
})
export class SmtpConfigModule {
}