import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ITecs } from '../types';

@Entity()
export class Tecnology implements ITecs.ITecnology {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    img: string;

  @Column()
    name: string;
}
