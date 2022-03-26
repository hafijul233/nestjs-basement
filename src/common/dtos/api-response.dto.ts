import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ApiResponseDto {
  @ApiProperty({ description: 'http status code that system return', type: 'number' })
  @IsNumber()
  statusCode: number;

  @ApiProperty({ description: 'system conclusion response message', type: 'string' })
  @IsString()
  message: string;
}
