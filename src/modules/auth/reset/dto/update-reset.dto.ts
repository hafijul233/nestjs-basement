import { PartialType } from '@nestjs/swagger';
import { CreateResetDto } from './create-reset.dto';

export class UpdateResetDto extends PartialType(CreateResetDto) {}
