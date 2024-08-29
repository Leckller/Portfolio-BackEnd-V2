import { AfterInsert, AfterRemove, AfterUpdate, Column,
  Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ITecs } from '../types';

@Entity()
export class Tecnology implements ITecs.ITecnology {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    img: string;

  @Column()
    name: string;

  @AfterInsert()
  logInsert() { console.log(`Tecnologia ${this.name} adicionada`); }

  @AfterUpdate()
  logUpdate() { console.log(`Tecnologia ${this.name} atualizada`); }

  @AfterRemove()
  logRemove() { console.log(`Tecnologia ${this.name} removido`); }
}
