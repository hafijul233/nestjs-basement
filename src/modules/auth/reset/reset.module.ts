import { Module } from '@nestjs/common';
import { ResetService } from './reset.service';
import { ResetController } from './reset.controller';

@Module({
  controllers: [ResetController],
  providers: [ResetService]
})
export class ResetModule {}
