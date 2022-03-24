import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  SerializeOptions,
  UseInterceptors,
  ClassSerializerInterceptor, Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { extendedUserGroupsForSerializing, UserEntity } from './serializers/user.serializer';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ShowUserDto } from './dto/show-user.dto';
import { UserPaginateDto } from './dto/user.paginate.dto';
import { ValidationErrorDto } from '../../../common/dtos/validation.error.dto';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
@SerializeOptions({
  groups: extendedUserGroupsForSerializing,
})
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @ApiBody({ description: 'Creating new user', type: CreateUserDto })
  @ApiOkResponse({ description: 'Return  created user', type: ShowUserDto })
  @ApiBadRequestResponse({ description: 'Validation failed message', type: ValidationErrorDto })
  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiBody({ description: 'List of all system users', type: UserPaginateDto })
  @ApiOkResponse({ description: 'List of all users', isArray: true, type: UserPaginateDto })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiBody({ description: 'Return a single user', type: CreateUserDto })
  @ApiOkResponse({ description: 'Return a single user', type: ShowUserDto })
  @ApiNotFoundResponse({ description: 'If no user found by this id', type: ValidationErrorDto })
  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string): Promise<UserEntity | string> {
    return this.userService.findOne(id);
  }

  @ApiBody({ description: 'Updating existing user information', type: UpdateUserDto })
  @ApiOkResponse({ description: 'Return users updated information', type: ShowUserDto })
  @ApiNotFoundResponse({ description: 'If no user found by this id', type: ValidationErrorDto })
  @ApiBadRequestResponse({ description: 'Validation failed message', type: ValidationErrorDto })
  @Patch(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiBody({ description: 'Soft Deleting existing user resource', type: UpdateUserDto })
  @ApiOkResponse({ description: 'Return users updated information', type: ShowUserDto })
  @ApiBadRequestResponse({ description: 'Validation failed message', type: ValidationErrorDto })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @ApiBody({ description: 'Export existing user resource as CSV', type: ShowUserDto })
  @ApiOkResponse({ description: 'Return users updated information on CSV', type: ShowUserDto })
  @Get('/export-csv')
  async export(@Res() res) {
    return await this.userService.exportUserDataToCSV()
      .then(async (fileName) =>
        await this.userService.getExportedUserCSV(fileName)
          .then((csvData) => {
            res.set('Content-Type', 'text/csv');
            return res.send(csvData);
          }),
      );
  }
}
