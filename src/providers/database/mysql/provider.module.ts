import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { MysqlConfigModule } from '../../../config/database/mysql/config.module';
import { MysqlConfigService } from '../../../config/database/mysql/config.service';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MysqlConfigModule],
      useFactory: async (mysqlConfigService: MysqlConfigService) => ({
        type: 'mysql' as DatabaseType,
        host: mysqlConfigService.host,
        port: mysqlConfigService.port,
        username: mysqlConfigService.username,
        password: mysqlConfigService.password,
        database: mysqlConfigService.database,
        entities: ['dist/modules/**/*.entity.{ts,js}'], //pattern issue using dist is safe
        subscribers: ['dist/modules/**/*.subscriber.{ts,js}'], //pattern issue using dist is safe
        migrations: ['dist/database/migrations/*.js'], //pattern issue using dist is safe
        logging: ["error"],
        synchronize: true,
        dropSchema: true,
        namingStrategy: new SnakeNamingStrategy(),
        migrationsTableName: 'migrations',
        migrationsTransactionMode: 'each', //'all' is best on production
        charset: 'UTF8MB4_UNICODE_CI',
        cli: {
          migrationsDir: 'src/database/migrations',
        },
      }),
      inject: [MysqlConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class MysqlDatabaseProviderModule {
}