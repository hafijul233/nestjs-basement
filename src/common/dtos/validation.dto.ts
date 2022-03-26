import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { ApiDto } from './api.dto';

export class ValidationDto extends PartialType(ApiDto) {
  @ApiProperty()
  @IsArray()
  errors: [String];
}
