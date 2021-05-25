import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import { User } from "./User"

@Entity('tb_subjects')
class Subject {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @JoinColumn({ name: "id_teacher"})
  @ManyToOne(() => User)
  user: User;

  @Column()
  id_teacher: string;

  @Column()
  period: string;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export { Subject };