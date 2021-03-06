import { NestFactory } from '@nestjs/core';
import { SeedersModule } from './database/seeders/seeders.module';
import { Logger } from '@nestjs/common';
import { Seeder } from './database/seeders/seeders';
import * as commandLineArgs from 'command-line-args';

const seederArgsInterface: commandLineArgs.OptionDefinition[] = [
  { name: 'users', type: Number, defaultValue: 10 },
];

async function bootstrap() {
  NestFactory.createApplicationContext(SeedersModule)
    .then(appContext => {
      const logger = appContext.get(Logger);
      const seeder = appContext.get(Seeder);
      seeder.seed()
        .then(() => {
          logger.debug('Seeding complete!');
        })
        .catch(error => {
          logger.error('Seeding failed!');
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch(error => {
      throw error;
    });
}

bootstrap();