import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const appConfigService: AppConfigService = app.get('AppConfigService');
  app.setGlobalPrefix('api');

  await app.listen(appConfigService.port);
}

bootstrap();
