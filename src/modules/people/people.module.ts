import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RecipientModule } from './recipient/recipient.module';

@Module({
  imports: [UserModule, RecipientModule]
})
export class PeopleModule {}
