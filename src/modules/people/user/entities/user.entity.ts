import { UserInterface } from '../interfaces/user.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User implements UserInterface {

  @PrimaryGeneratedColumn()
  id: bigint;

  @Column({ nullable: true, default: null })
  parent_id: null | number;

  @Column()
  name: string;

  @Column()
  mobile_number: string;

  @Column()
  password: string;

  @Column()
  pin: string;

  @Column({ nullable: true, default: null })
  active: null | string;

  @Column({ nullable: true, default: null })
  wrong_password: null | boolean;

  @Column({ nullable: true, default: null })
  wrong_pin: null | boolean;

  @Column({ nullable: true, default: null })
  risk_profiling: null | string;

  @Column({ nullable: true, default: null })
  is_jompay_allowed: null | string;

  @Column({ nullable: true, default: null })
  app_version: null | string;

  @Column({ nullable: true, default: null })
  fcm_token: null | string;

  @Column({ nullable: true, default: null })
  default_language: null | string;

  @Column({ nullable: true, default: null })
  default_currency: null | string;

  @Column({ nullable: true, default: null })
  default_country_id: null | number;

  @Column({ nullable: true, default: null })
  applicant_id: null | string;

  @Column({ nullable: true, default: null })
  check_id: null | string;

  @Column({ nullable: true, default: null })
  application_id: null | string;

  @Column({ nullable: true, default: null })
  document_id: null | string;

  @Column({ nullable: true, default: null })
  is_on_fido: null | string;

  @Column({ nullable: true, default: null })
  on_fido_update_count: null | number;

  @Column({ nullable: true, default: null })
  on_fido_check_count: null | number;

  @Column({ nullable: true, default: null })
  remember_token: null | string;

  @Column({ nullable: true, default: null })
  father_name: null | string;

  @Column({ nullable: true, default: null })
  mother_name: null | string;

  @Column({ nullable: true, default: null })
  gender: null | string;

  @Column({ nullable: true, default: null })
  marital_status: null | string;

  @Column({ nullable: true, default: null })
  occupation: null | string;

  @Column({ nullable: true, default: null })
  source_of_income: null | string;

  @Column({ nullable: true, default: null })
  id_type: null | string;

  @Column({ nullable: true, default: null })
  id_no: null | string;

  @Column({ nullable: true, default: null })
  id_issue_country: null | string;

  @Column({ nullable: true, default: null })
  passport_issue_date: null | string;

  @Column({ nullable: true, default: null })
  id_expire_date: null | string;

  @Column({ nullable: true, default: null })
  profile_photo: null | string;

  @Column({ nullable: true, default: null })
  scan: null | string;

  @Column({ nullable: true, default: null })
  scan_1: null | string;

  @Column({ nullable: true, default: null })
  scan_2: null | string;

  @Column({ nullable: true, default: null })
  date_of_birth: null | Date;

  @Column({ nullable: true, default: null })
  permanent_address: null | string;

  @Column({ nullable: true, default: null })
  city_id: null | number;

  @Column({ nullable: true, default: null })
  province_id: null | number;

  @Column({ nullable: true, default: null })
  country_id: null | number;

  @Column({ nullable: true, default: null })
  post_code: null | string;

  @Column({ nullable: true, default: null })
  present_address: null | string;

  @Column({ nullable: true, default: null })
  present_city_id: null | number;

  @Column({ nullable: true, default: null })
  present_province_id: null | number;

  @Column({ nullable: true, default: null })
  present_country_id: null | number;

  @Column({ nullable: true, default: null })
  present_post_code: null | string;

  @Column({ nullable: true, default: null })
  note: null | string;

  @Column({ nullable: true, default: null })
  nationality: null | string;

  @Column({ nullable: true, default: null })
  status: null | string;

  @Column({ nullable: true, default: null })
  blacklist: null | string;

  @Column({ nullable: true, default: null })
  id_no_duplicate: null | string;

  @Column({ nullable: true, default: null })
  created_by: null | number;

  @Column({ nullable: true, default: null })
  managed_by: null | number;

  @Column({ nullable: true, default: null })
  updated_by: null | number;

  @Column({ nullable: true, default: null })
  deleted_by: null | number;

  @Column({ nullable: true, default: null })
  created_at: null | Date;

  @Column({ nullable: true, default: null })
  updated_at: null | Date;

  @Column({ nullable: true, default: null })
  deleted_at: null | Date;
}
