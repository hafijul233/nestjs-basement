import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ApiResponseDto } from './api-response.dto';
import { IsArray } from 'class-validator';

export class ValidationErrorDto extends PartialType(ApiResponseDto) {
  @ApiProperty()
  @IsArray()
  errors: [String];
}
