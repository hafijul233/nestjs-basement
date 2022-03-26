import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ApiDto } from './api.dto';

export class UpdateDto<TData> extends PartialType(ApiDto) {
  @ApiProperty({ description: 'updated resource or entity' })
  data: TData;

}