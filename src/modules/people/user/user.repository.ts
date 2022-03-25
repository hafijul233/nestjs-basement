import { EntityRepository } from 'typeorm';
import { User } from './entities/user.entity';
import { allUserGroupsForSerializing, UserSerializer } from './serializers/user.serializer';
import { classToPlain, plainToClass } from 'class-transformer';
import { ModelRepository } from '../../../common/repositories/model.repository';

@EntityRepository(User)
export class UserRepository extends ModelRepository<User, UserSerializer> {
  transform(model: User): UserSerializer {

    const transformOptions = {
      groups: allUserGroupsForSerializing,
    };

    return plainToClass(
      UserSerializer,
      classToPlain(model, transformOptions),
      transformOptions,
    );
  }

  transformMany(models: User[]): UserSerializer[] {
    return models.map(model => this.transform(model));
  }
}