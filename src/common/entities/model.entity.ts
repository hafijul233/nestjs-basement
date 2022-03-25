import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity, JoinColumn, OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { ModelInterface } from '../interfaces/model-interface';
import { User } from '../../modules/people/user/entities/user.entity';

@Entity()
export abstract class ModelEntity implements ModelInterface {

  @PrimaryGeneratedColumn()
  id: bigint;

  @VersionColumn({ type: 'int' })
  version: number;

  /*@Column({ type: 'int', nullable: true, default: null })*/
  @OneToOne(() => User)
  @JoinColumn()
  creator: User;

  @Column({ type: 'int', nullable: true, default: null })
  deleted_by: number | null;

  /*@Column({ type: 'int', nullable: true, default: null })*/
  @OneToOne(() => User)
  @JoinColumn()
  updater: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
