import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import { User } from "./User"
import { Topic } from "./Topic";

@Entity('tb_subjects')
class Subject {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @JoinColumn({ name: "id_teacher"})
  @ManyToOne(() => User)
  user: User;

  @OneToMany(type => Topic, subject => Subject)
  topics: Topic[];

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