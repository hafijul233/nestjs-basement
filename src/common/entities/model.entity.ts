import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { ModelInterface } from '../interfaces/model-interface';

@Entity()
export abstract class ModelEntity implements ModelInterface {

  @PrimaryGeneratedColumn()
  id: bigint;

  @VersionColumn({ type: 'int' })
  version: number;

  @Column({ type: 'int', width: 200, nullable: true, default: null })
  created_by: number | null;

  @Column({ type: 'int', width: 200, nullable: true, default: null })
  deleted_by: number | null;

  @Column({ type: 'int', width: 200, nullable: true, default: null })
  updated_by: number | null;

  @CreateDateColumn({ type: 'datetime', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deleted_at: Date;
}
