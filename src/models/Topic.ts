import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

import { Subject } from "./Subject";

import {
    v4 as uuid
} from "uuid"

@Entity('tb_topics')
class Topic {

    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: "subject_id" })
    @ManyToOne(() => Subject)    
    subject: Subject;

    @Column()
    subject_id: string;
    
    @Column()
    name: string;

    @Column()
    description: string;
    
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

export { Topic };