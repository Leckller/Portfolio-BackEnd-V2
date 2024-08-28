import { Injectable } from '@nestjs/common';
import { ITecs } from '../../types';

@Injectable()
export class TecnologiesRepository implements ITecs.ITecnologyRepository {
  addTecnology(tecnology: ITecs.ITecnology): void {

  }

  getAll(): ITecs.ITecnology[] {
    return [];
  }

  removeTecnology(id: number): void {

  }
}
