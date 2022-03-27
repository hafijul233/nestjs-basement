import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { UserStatuses } from '../../../../common/constants';

export class UserDto {
  @ApiProperty({
    description: 'user full name',
    type: 'string',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'user mobile number without country code',
    type: 'string',
  })
  @IsString()
  readonly mobile_number: string;

  @ApiProperty({
    description: 'user system login password',
    type: 'string',
  })
  @IsString()
   password: string;

  @ApiProperty({
    description: 'user frontend login pin',
    type: 'string',
  })
  @IsNumber()
  pin: string;

  @ApiProperty({ description: 'user account status', type: 'enum', enum: UserStatuses })
  @IsString()
  readonly active?: UserStatuses;
}
