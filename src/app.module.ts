import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { PeopleModule } from './modules/people/people.module';
import { SeedersModule } from './database/seeders/seeders.module';
import { FactoriesModule } from './database/factories/factories.module';

@Module({
  imports: [
    AppConfigModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    PeopleModule,
    SeedersModule,
    FactoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
