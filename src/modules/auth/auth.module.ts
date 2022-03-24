import { Module } from '@nestjs/common';
import { AppController } from '../../app.controller';
import { AppService } from '../../app.service';
import { AuthConfigModule } from '../../config/auth/config.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ResetModule } from './reset/reset.module';

@Module({
  imports: [
    AuthConfigModule,
    LoginModule,
    RegisterModule,
    ResetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AuthModule {}
