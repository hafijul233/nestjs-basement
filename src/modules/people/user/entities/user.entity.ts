import { UserInterface } from '../interfaces/user.interface';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { ModelEntity } from '../../../../common/entities';

import { hashPassword } from '../../../../common/helpers';

@Entity('users')
export class User extends ModelEntity implements UserInterface {

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  mobile_number: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hashPassword(this.password);
    this.pin = await hashPassword(this.pin);
  }

  @Column({ type: 'varchar', length: 255, nullable: false })
  pin: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: null })
  active: null | string;
}
