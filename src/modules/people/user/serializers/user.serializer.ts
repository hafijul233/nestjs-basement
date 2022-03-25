import { Expose } from 'class-transformer';
import { ModelSerializer } from '../../../../common/serializers/model.serializer';
import { UserInterface } from '../interfaces/user.interface';


export const defaultUserGroupsForSerializing: string[] = ['user.timestamps'];

export const extendedUserGroupsForSerializing: string[] = [
  ...defaultUserGroupsForSerializing,
];
export const allUserGroupsForSerializing: string[] = [
  ...extendedUserGroupsForSerializing,
  'user.password',
];

export class UserSerializer extends ModelSerializer implements UserInterface {
  active: string | null;
  mobile_number: string;
  name: string;
  @Expose({groups : ['user.password']})
  password: string;
  pin: string;
}