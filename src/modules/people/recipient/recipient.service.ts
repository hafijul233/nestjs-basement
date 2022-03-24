import { Injectable } from '@nestjs/common';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';

@Injectable()
export class RecipientService {
  create(createRecipientDto: CreateRecipientDto) {
    return 'This action adds a new recipient';
  }

  findAll() {
    return `This action returns all recipient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipient`;
  }

  update(id: number, updateRecipientDto: UpdateRecipientDto) {
    return `This action updates a #${id} recipient`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipient`;
  }
}
