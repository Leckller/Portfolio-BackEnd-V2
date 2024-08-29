import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tecnology } from '../../Entities/Tecnology.entity';
import { ITecs } from '../../types';

@Injectable()
export class TecnologiesRepository implements ITecs.ITecnologyRepository {
  constructor(@InjectRepository(Tecnology) private repo: Repository<Tecnology>) {}

  addTecnology(tecnology: ITecs.ITecnology): void {
    const tec = this.repo.create(tecnology);
    this.repo.save(tec);
  }

  getAll(): ITecs.ITecnology[] {
    return [];
  }

  removeTecnology(id: number): void {
    const tec = this.repo.findBy({ id });
    console.log(tec);
  }
}
