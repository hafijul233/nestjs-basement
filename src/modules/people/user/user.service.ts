import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserEntity } from './serializers/user.serializer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {
  }

  async create(inputs: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number,
                relations : string[] = [],
                throwsException = false):Promise<UserEntity|string> {
    return `This action returns a #${id} user`;
  }

  async update(id: number, inputs: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
