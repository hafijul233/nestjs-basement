import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ApiDto } from './api.dto';

export class CreateDto<TData> extends PartialType(ApiDto) {
  @ApiProperty({ description: 'newly created resource or entity' })
  data: TData;

}