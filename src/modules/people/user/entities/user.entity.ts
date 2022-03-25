import { UserInterface } from '../interfaces/user.interface';
import {
  Column,
  Entity,
} from 'typeorm';
import { ModelEntity } from '../../../../common/entities/model.entity';

@Entity()
export class User extends ModelEntity implements UserInterface {

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  mobile_number: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  pin: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: null })
  active: null | string;
}
