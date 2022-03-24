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

  async create(
    inputs: CreateUserDto,
  ): Promise<UserEntity> {
    return await this.userRepository.createEntity(inputs);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string,
                relations: string[] = [],
                throwsException = false,
  ): Promise<UserEntity | string> {
    return await this.userRepository.showEntity(id, relations, throwsException);
  }

  async update(id: string,
               inputs: UpdateUserDto,
  ): Promise<UserEntity> {
    return await this.userRepository.updateEntity(id, inputs);
  }

  async remove(id: string,
  ): Promise<boolean> {
    return await this.userRepository.deleteEntity(id);
  }
}
