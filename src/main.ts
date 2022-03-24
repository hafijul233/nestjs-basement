import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppConfigService } from './config/app/config.service';
import * as compression from 'compression';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const appConfigService: AppConfigService = app.get(AppConfigService);
  app.setGlobalPrefix('api');
  app.use(helmet());
  app.use(compression()); //disabled if server compression is enabled

  await app.listen(appConfigService.port);
}

bootstrap();
