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
  email: string;
  name: null | string;
  @Expose({ groups: ['user.password'] })
  password: string;
  @Expose({ groups: ['user.timestamps'] })
  createdAt: Date;
  @Expose({ groups: ['user.timestamps'] })
  updatedAt: Date;
  active: string | null;
  app_version: string | null;
  applicant_id: string | null;
  application_id: string | null;
  blacklist: string | null;
  check_id: string | null;
  city_id: number | null;
  country_id: number | null;
  created_by: number | null;
  date_of_birth: Date | null;
  default_country_id: number | null;
  default_currency: string | null;
  default_language: string | null;
  deleted_by: number | null;
  document_id: string | null;
  father_name: string | null;
  fcm_token: string | null;
  gender: string | null;
  id_expire_date: string | null;
  id_issue_country: string | null;
  id_no: string | null;
  id_no_duplicate: string | null;
  id_type: string | null;
  is_jompay_allowed: string | null;
  is_on_fido: string | null;
  managed_by: number | null;
  marital_status: string | null;
  mobile_number: string;
  mother_name: string | null;
  nationality: string | null;
  note: string | null;
  occupation: string | null;
  on_fido_check_count: number | null;
  on_fido_update_count: number | null;
  parent_id: number | null;
  passport_issue_date: string | null;
  permanent_address: string | null;
  pin: string;
  post_code: string | null;
  present_address: string | null;
  present_city_id: number | null;
  present_country_id: number | null;
  present_post_code: string | null;
  present_province_id: number | null;
  profile_photo: string | null;
  province_id: number | null;
  remember_token: string | null;
  risk_profiling: string | null;
  scan: string | null;
  scan_1: string | null;
  scan_2: string | null;
  source_of_income: string | null;
  status: string | null;
  updated_by: number | null;
  wrong_password: boolean | null;
  wrong_pin: boolean | null;
}