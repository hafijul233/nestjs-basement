import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RecipientModule } from './recipient/recipient.module';
import { MysqlDatabaseProviderModule } from '../../providers/database/mysql/provider.module';

@Module({
  imports: [MysqlDatabaseProviderModule, UserModule, RecipientModule]
})
export class PeopleModule {}
