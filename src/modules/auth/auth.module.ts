import { Module } from '@nestjs/common';
import { AppController } from '../../app.controller';
import { AppService } from '../../app.service';
import { AuthConfigModule } from '../../config/auth/config.module';

@Module({
  imports: [
    AuthConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AuthModule {}
