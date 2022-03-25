import { User } from '../../modules/people/user/entities/user.entity';

export interface ModelInterface {
  version: number;
  creator: null | User;
  updater: null | User;
  deleted_by: null | number;
  created_at: null | Date;
  updated_at: null | Date;
  deleted_at: null | Date;
}