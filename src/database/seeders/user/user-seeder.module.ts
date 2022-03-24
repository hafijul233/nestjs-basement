import { Module } from '@nestjs/common';
import { UserSeederService } from './user-seeder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../modules/people/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserSeederService],
  exports: [UserSeederService],
})
export class UserSeederModule {
}
