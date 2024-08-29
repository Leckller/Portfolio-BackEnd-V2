import { AfterInsert, AfterRemove, AfterUpdate,
  Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IProjs } from '../types';

@Entity()
export class Project implements IProjs.IProject {
  @PrimaryGeneratedColumn()
    id?: number;

  @Column()
    codeLink: string;

  @Column()
    description: string;

  @Column()
    title: string;

  @Column()
    webLink: string;

  @AfterInsert()
  logInsert() { console.log(`Projeto ${this.title} adicionada`); }

  @AfterUpdate()
  logUpdate() { console.log(`Projeto ${this.title} atualizada`); }

  @AfterRemove()
  logRemove() { console.log(`Projeto ${this.title} removido`); }
}
