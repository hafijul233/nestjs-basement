import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import 'reflect-metadata';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'warn'],
  });
  const appConfigService: AppConfigService = app.get(AppConfigService);

  app.setGlobalPrefix('api')
    .use(helmet());

  //openapi boot code
  if (appConfigService.env === 'local') {
    const config = new DocumentBuilder()
      .setTitle('My Cash Money API Documentation')
      .setDescription('My Cash Money Remittance transfer service provider and Web API System.')
      .setContact('My Cash Money', 'https://mycash.my/', 'support@mycashmy.com')
      .setLicense('My Cash Money', 'My Cash Money License')
      .setVersion('v1')
      .addServer(appConfigService.url, 'Local Development Server')
      .build();

    const document = SwaggerModule.createDocument(app, config, {
      ignoreGlobalPrefix: true
    });

    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(appConfigService.port);
}

bootstrap();
