import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResetService } from './reset.service';
import { CreateResetDto } from './dto/create-reset.dto';
import { UpdateResetDto } from './dto/update-reset.dto';

@Controller('reset')
export class ResetController {
  constructor(private readonly resetService: ResetService) {}

  @Post()
  create(@Body() createResetDto: CreateResetDto) {
    return this.resetService.create(createResetDto);
  }

  @Get()
  findAll() {
    return this.resetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResetDto: UpdateResetDto) {
    return this.resetService.update(+id, updateResetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resetService.remove(+id);
  }
}
