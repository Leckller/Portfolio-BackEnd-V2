import { Injectable } from '@nestjs/common';
import { ITecs } from '../../types';
import { TecnologiesRepository } from './tecnologies.repository';

@Injectable()
export class TecnologiesService implements ITecs.ITecnologyRepository {
  // Pelo visto n da p fazer injeção de dependência com inversão de dependência
  constructor(private repository: TecnologiesRepository) {}

  addTecnology(tecnology: ITecs.ITecnology): void {
    this.repository.addTecnology(tecnology);
    console.log('add');
  }

  getAll(): ITecs.ITecnology[] {
    return this.repository.getAll();
  }

  removeTecnology(id: number): void {
    this.repository.removeTecnology(id);
  }
}
