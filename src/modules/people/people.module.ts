import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MysqlDatabaseProviderModule } from '../../providers/database/mysql/provider.module';

@Module({
  imports: [MysqlDatabaseProviderModule, UserModule]
})
export class PeopleModule {}
