import { ApiQuery } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UserPaginateDto {
  @IsOptional()
  per_page: number;
}
