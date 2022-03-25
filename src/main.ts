import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppConfigService } from './config/app/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import helmet from 'helmet';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const appConfigService: AppConfigService = app.get(AppConfigService);

  app.setGlobalPrefix('api');

  app.use(helmet());

  app.use(compression()); //disabled if server compression is enabled

  //openapi boot code
  if (appConfigService.env === 'local') {
    const config = new DocumentBuilder()
      .setTitle('My Cash Money API Documentation')
      .setDescription('My Cash Money Remittance transfer service provider and Web Api System.')
      .setVersion('1.0.0')
      .setContact('My Cash Money', 'https://mycash.my/', 'support@mycashmy.com')
      .setTermsOfService('https://' + appConfigService.url + ':' +
        appConfigService.port + '/terms-condition')
      .setLicense('My Cash Money', 'My Cash Money License')
      .addServer('https://' + appConfigService.url + ':' + appConfigService.port, 'testing server')
      .addTag('1.0.0')
      .build();
    const document = SwaggerModule.createDocument(app, config, {
      ignoreGlobalPrefix: true,
    });
    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(appConfigService.port);
}

bootstrap();
