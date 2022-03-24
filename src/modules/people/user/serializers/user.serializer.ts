import { Expose } from 'class-transformer';
import { ModelEntity } from '../../../../common/serializers/model.serializer';
import { UserInterface } from '../interfaces/user.interface';


export const defaultUserGroupsForSerializing: string[] = ['user.timestamps'];

export const extendedUserGroupsForSerializing: string[] = [
  ...defaultUserGroupsForSerializing,
];
export const allUserGroupsForSerializing: string[] = [
  ...extendedUserGroupsForSerializing,
  'user.password',
];

export class UserEntity extends ModelEntity implements UserInterface {
  id: string;
  active: string | null;
  mobile_number: string;
  name: string;
  @Expose({groups : ['user.password']})
  password: string;
  pin: string;
}