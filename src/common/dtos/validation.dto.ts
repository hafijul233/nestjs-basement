import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ApiDto } from './api.dto';
import { IsObject } from 'class-validator';

export class ValidationDto extends PartialType(ApiDto) {
  @ApiProperty({
    type: 'object',
    description: 'field that has a validation error',
    items: {
      type: 'array',
      description: 'list of all the validation messages',
      items: {
        type: 'string',
        description: 'individual validation message',
      },
    },
  })
  @IsObject()
  errors: object;
}
