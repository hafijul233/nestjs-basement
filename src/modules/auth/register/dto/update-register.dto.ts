import { PartialType } from '@nestjs/swagger';
import { CreateRegisterDto } from './create-register.dto';

export class UpdateRegisterDto extends PartialType(CreateRegisterDto) {}
