import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'covid_observations' })
export class Case {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    observation_date: Date;
  
    @Column()
    province_state: string;

    @Column()
    country: string;
  
    @Column()
    last_update: Date;
  
    @Column()
    confirmed: string;

    @Column()
    deaths: string;

    @Column()
    recovered: string;
}
