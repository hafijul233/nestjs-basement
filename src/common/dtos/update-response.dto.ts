import { ApiProperty } from '@nestjs/swagger';

export class UpdateResponseDto<TData> {
  @ApiProperty({description: 'http status code that system return', type: 'number'})
  statusCode:number;

  @ApiProperty({description: 'http status code that system return', type : 'string'})
  message:string;

  @ApiProperty({description: 'updated resource or entity'})
  data: TData;

}