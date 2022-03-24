import { Module } from '@nestjs/common';
import { RecipientService } from './recipient.service';
import { RecipientController } from './recipient.controller';

@Module({
  controllers: [RecipientController],
  providers: [RecipientService]
})
export class RecipientModule {}
