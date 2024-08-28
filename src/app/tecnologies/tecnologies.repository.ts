import { Injectable } from '@nestjs/common';
import { ITecs } from '../../types';

@Injectable()
export class TecnologiesRepository implements ITecs.ITecnologyRepository {
  addTecnology(): void {

  }

  getAll(): ITecs.ITecnology[] {
    return [];
  }

  removeTecnology(): void {

  }
}
