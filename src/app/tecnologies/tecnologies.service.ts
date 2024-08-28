import { Injectable } from '@nestjs/common';
import { ITecs } from 'src/types';

@Injectable()
export class TecnologiesService implements ITecs.ITecnologyRepository {
  constructor(private repository: ITecs.ITecnologyRepository) {}

  addTecnology(tecnology: ITecs.ITecnology): void {
    this.repository.addTecnology(tecnology);
  }

  getAll(): ITecs.ITecnology[] {
    return this.repository.getAll();
  }

  removeTecnology(id: number): void {
    this.repository.removeTecnology(id)
  }
}
