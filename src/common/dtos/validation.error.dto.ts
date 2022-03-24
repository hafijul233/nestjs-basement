import { ApiProperty } from '@nestjs/swagger';

export class ValidationErrorDto {
  @ApiProperty()
  readonly statusCode: number;

  @ApiProperty()
  readonly message: string[];

  @ApiProperty()
  error: string;
}
