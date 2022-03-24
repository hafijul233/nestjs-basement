import { ApiProperty } from '@nestjs/swagger';

export class UserPaginateDto<TData> {
  @ApiProperty({
    description: 'Number of items will be displayed on every request',
    minimum: 1,
    default: 1,
    required: false,
  })
  per_page: number;
}
