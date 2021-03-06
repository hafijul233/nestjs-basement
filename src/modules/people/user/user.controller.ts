import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { extendedUserGroupsForSerializing, UserSerializer } from './serializers/user.serializer';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags, getSchemaPath,
} from '@nestjs/swagger';
import { UserPaginateDto } from './dto/user.paginate.dto';
import { UserDto } from './dto/user.dto';
import { CreateDto, UpdateDto, ValidationDto } from '../../../common/dtos';
import { User } from './entities/user.entity';


@ApiTags('User')
/*@ApiBearerAuth()*/
@Controller('users')
@SerializeOptions({
  groups: extendedUserGroupsForSerializing,
})
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @ApiOkResponse({ description: 'List of all users', isArray: true, type: UserPaginateDto })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiBody({ description: 'Create a single user', type: UserDto })
  /*@ApiOkResponse({
    status: 201,
    description: 'testing',
    schema: {
      oneOf: [
        {
          $ref: getSchemaPath(CreateDto),
        },
        {
          properties: {
            data: {
              items: { $ref: getSchemaPath(UserDto) },
            },
          },
        },
      ],
    },
    type: CreateDto,
  })*/
  @ApiBadRequestResponse({ description: 'Validation failed message', type: ValidationDto })
  @Post()
  create(@Body() inputs: UserDto) {
    return this.userService.create(inputs);

  }

  @ApiBody({ description: 'Return a single user' })
  @ApiOkResponse({ description: 'Return a single user', type: UpdateDto })
  @ApiNotFoundResponse({ description: 'If no user found by this id', type: ValidationDto })
  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string): Promise<UserSerializer | string> {
    return this.userService.findOne(id);
  }

  @ApiBody({ description: 'Updating existing user information', type: UpdateDto })
  @ApiOkResponse({ description: 'Return users updated information', type: UserDto })
  @ApiNotFoundResponse({ description: 'If no user found by this id', type: ValidationDto })
  @ApiBadRequestResponse({ description: 'Validation failed message', type: ValidationDto })
  @Patch(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: string, @Body() inputs: UserDto) {
    return this.userService.update(id, inputs);
  }

  @ApiBody({ description: 'Soft Deleting existing user resource', type: UpdateDto })
  @ApiOkResponse({ description: 'Return users updated information', type: UserDto })
  @ApiBadRequestResponse({ description: 'Validation failed message', type: ValidationDto })
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
