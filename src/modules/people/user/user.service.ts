import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserSerializer } from './serializers/user.serializer';
import { parse } from 'json2csv';
import { User } from './entities/user.entity';
import { checkIfFileOrDirectoryExists, createFile, getFile } from '../../../common/helpers';
import { UserDto } from './dto/user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {
  }

  async create(
    inputs: UserDto,
  ): Promise<UserSerializer> {
    return await this.userRepository.createEntity(inputs);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string,
                relations: string[] = [],
                throwsException = false,
  ): Promise<UserSerializer | string> {
    return await this.userRepository.showEntity(id, relations, throwsException);
  }

  async update(id: string,
               inputs: UserDto,
  ): Promise<UserSerializer> {
    return await this.userRepository.updateEntity(id, inputs);
  }

  async remove(id: string,
  ): Promise<boolean> {
    return await this.userRepository.deleteEntity(id);
  }

  /**
   * Creates a CSV file with users data
   *
   * @returns {Promise<string>}
   */
  async exportUserDataToCSV(): Promise<string> {
    return await this.findAll() // Some function that gets users data.
      .then(async (users) => {
        const [csvData, csvFields] =
          this.transformUsersDataForCSV(users); // Some function that returns you csv data & fields.

        if (!csvData || !csvFields) {
          return Promise.reject('Unable to transform users data for CSV.');
        }

        const csv = parse(csvData, { fields: csvFields });

        const filePath = `storage/app/exports/users`;
        const fileName = `users-${new Date().toISOString()}.csv`;

        await createFile(filePath, fileName, csv);

        return Promise.resolve(fileName);
      })
      .catch((error) => Promise.reject(error));
  }

  /**
   * Gets an exported CSV file
   *
   * @param {string} filename
   *
   * @returns {Promise<string>}
   */
  async getExportedUserCSV(filename: string): Promise<string> {
    const filePath = `storage/app/exports/users/${filename}`;

    if (!checkIfFileOrDirectoryExists(filePath)) {
      throw new NotFoundException('Users export not found.');
    }

    return (await getFile(filePath, 'utf8')).toString();
  }

  private transformUsersDataForCSV(users: User[]) {
    return [];
  }
}

