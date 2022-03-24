import { EntityRepository } from 'typeorm';
import { User } from './entities/user.entity';
import { allUserGroupsForSerializing, UserEntity } from './serializers/user.serializer';
import { classToPlain, plainToClass } from 'class-transformer';
import { ModelRepository } from '../../../common/repositories/model.repository';

@EntityRepository(User)
export class UserRepository extends ModelRepository<User, UserEntity> {
  transform(model: User): UserEntity {
    const transformOptions = {
      groups: allUserGroupsForSerializing,
    };
    return plainToClass(
      UserEntity,
      classToPlain(model, transformOptions),
      transformOptions,
    );
  }

  transformMany(models: User[]): UserEntity[] {
    return models.map(model => this.transform(model));
  }
}