import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from 'typeorm';
  
  import { v4 as uuid } from 'uuid';
  
  
  @Entity('tb_content')
  class Content {
  
    @PrimaryColumn()
    id: string;
  
    @Column()
    title: string;

    @Column()
    video_link: string;

    @Column()
    archives: string;    

    @Column()
    topics_id: string;

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
  
  export { Content };