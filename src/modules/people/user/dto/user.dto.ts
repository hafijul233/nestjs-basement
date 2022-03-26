import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly mobileNumber: string;

  @ApiProperty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsNumber()
  readonly pin: string;

  @ApiProperty()
  @IsString()
  readonly active?: string;
}
