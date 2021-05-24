import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity('partners')
class Partners {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    street: string;

    @Column()
    neighborhood: string;

    @Column()
    houseNumber: string;

    @Column()
    city: string;

    @Column()
    postalCode: string;

    @Column()
    openingTime: string;

    @Column()
    closingTime: string;

    @Column()
    contactNumber: string;

    @Column()
    whatsappNumber: string;

    @Column()
    instagramLink: string;

    @Column()
    facebookLink: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    logo: string;

    @Column()
    complement: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Partners;
