import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { MysqlConfigModule } from '../../../config/database/mysql/config.module';
import { MysqlConfigService } from '../../../config/database/mysql/config.service';

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
        entities: ['dist/modules/**/*.entity.js'],
        subscribers: ['dist/modules/**/*.subscriber.js'],
        migrations: [
          'dist/database/migrations/*.js',
        ],
        logging: true,
        synchronize: false,
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