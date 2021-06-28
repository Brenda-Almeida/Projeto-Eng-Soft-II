import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToMany,
  } from 'typeorm';
  
  import { v4 as uuid } from 'uuid';
  
  import { User } from "./User"

  import { Subject } from './Subject';
  
  @Entity('tb_registered')
  class Registered {
  
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @JoinColumn({ name: "id_student"})
    @ManyToMany(() => User)
    user: User;

    @JoinColumn({ name: "id_subject"})
    @ManyToMany(() => Subject)
    subject: Subject;
  
    @Column()
    id_student: string;

    @Column()
    id_subject: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    constructor() {
      if (!this.id) {
          this.id = uuid();
      }
  }

  }
  
  export { Registered };