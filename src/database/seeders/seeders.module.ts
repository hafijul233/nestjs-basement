import { Logger, Module } from '@nestjs/common';
import { UserSeederModule } from './user/user-seeder.module';
import { MysqlDatabaseProviderModule } from '../../providers/database/mysql/provider.module';
import { Seeder } from './seeders';

@Module({
  imports: [MysqlDatabaseProviderModule, UserSeederModule],
  providers: [Logger, Seeder],
})
export class SeedersModule {
}
