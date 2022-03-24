import { Injectable } from '@nestjs/common';
import { CreateResetDto } from './dto/create-reset.dto';
import { UpdateResetDto } from './dto/update-reset.dto';

@Injectable()
export class ResetService {
  create(createResetDto: CreateResetDto) {
    return 'This action adds a new reset';
  }

  findAll() {
    return `This action returns all reset`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reset`;
  }

  update(id: number, updateResetDto: UpdateResetDto) {
    return `This action updates a #${id} reset`;
  }

  remove(id: number) {
    return `This action removes a #${id} reset`;
  }
}
