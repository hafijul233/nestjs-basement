import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipientService } from './recipient.service';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';

@Controller('recipient')
export class RecipientController {
  constructor(private readonly recipientService: RecipientService) {}

  @Post()
  create(@Body() createRecipientDto: CreateRecipientDto) {
    return this.recipientService.create(createRecipientDto);
  }

  @Get()
  findAll() {
    return this.recipientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipientDto: UpdateRecipientDto) {
    return this.recipientService.update(+id, updateRecipientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipientService.remove(+id);
  }
}
