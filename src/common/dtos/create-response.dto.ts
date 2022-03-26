import { ApiProperty } from '@nestjs/swagger';

export class CreateResponseDto<TData> {

  @ApiProperty({description: 'newly created resource or entity'})
  data: TData;

}