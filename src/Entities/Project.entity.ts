import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IProjs } from '../types';
import { ITecnology } from '../types/Tecnology';

@Entity()
export class Project implements Omit<IProjs.IProject, 'tecnologies'> {
  @PrimaryGeneratedColumn()
    id?: number;

  @Column()
    codeLink: string;

  @Column()
    description: string;

  // @Column()
  //   tecnologies: ITecnology[];

  @Column()
    title: string;

  @Column()
    webLink: string;
}
