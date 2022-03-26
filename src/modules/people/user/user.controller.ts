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
import { extendedUserGroupsForSerializing, UserSerializer } from './serializers/user.serializer';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody, ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse, ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { UserPaginateDto } from './dto/user.paginate.dto';
import { ValidationErrorDto } from '../../../common/dtos/validation.error.dto';
import { UserDto } from './dto/user.dto';
import { CreateResponseDto } from '../../../common/dtos/create-response.dto';

@ApiTags('User')
/*@ApiBearerAuth()*/
@Controller('users')
@SerializeOptions({
  groups: extendedUserGroupsForSerializing,
})
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @ApiCreatedResponse({ description: 'Return  created user', type: CreateResponseDto })
  @ApiBadRequestResponse({ description: 'Validation failed message', type: ValidationErrorDto })
  @Post()
  create(@Body() inputs: UserDto) {
    return this.userService.create(inputs);
  }

  @ApiOkResponse({ description: 'List of all users', isArray: true, type: UserPaginateDto })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiBody({ description: 'Return a single user', type: CreateUserDto })
  @ApiOkResponse({ description: 'Return a single user', type: UserDto })
  @ApiNotFoundResponse({ description: 'If no user found by this id', type: ValidationErrorDto })
  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string): Promise<UserSerializer | string> {
    return this.userService.findOne(id);
  }

  @ApiBody({ description: 'Updating existing user information', type: UpdateUserDto })
  @ApiOkResponse({ description: 'Return users updated information', type: UserDto })
  @ApiNotFoundResponse({ description: 'If no user found by this id', type: ValidationErrorDto })
  @ApiBadRequestResponse({ description: 'Validation failed message', type: ValidationErrorDto })
  @Patch(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiBody({ description: 'Soft Deleting existing user resource', type: UpdateUserDto })
  @ApiOkResponse({ description: 'Return users updated information', type: UserDto })
  @ApiBadRequestResponse({ description: 'Validation failed message', type: ValidationErrorDto })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @ApiBody({ description: 'Export existing user resource as CSV', type: UserDto })
  @ApiOkResponse({ description: 'Return users updated information on CSV', type: UserDto })
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
