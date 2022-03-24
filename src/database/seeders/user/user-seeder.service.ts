import { Injectable } from '@nestjs/common';
import { User } from '../../../modules/people/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from './data';
import { UserInterface } from '../../../modules/people/user/interfaces/user.interface';

@Injectable()
export class UserSeederService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  create(): Array<Promise<User>> {
    return users.map(async (user: UserInterface) => {
      return Promise.resolve(await this.userRepository.create(user));
    });
  }
}
