import { UserInterface } from '../interfaces/user.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User implements UserInterface {

  @PrimaryGeneratedColumn()
  id: bigint;

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

}
