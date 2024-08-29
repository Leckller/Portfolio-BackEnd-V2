import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tecnology } from '../../Entities/Tecnology.entity';
import { ITecs } from '../../types';

const notFoundMessage = 'Tecnologia não encontrada';

@Injectable()
export class TecnologiesService implements ITecs.ITecnologyService {
  constructor(@InjectRepository(Tecnology) private repo: Repository<Tecnology>) {}

  async updateTecnology(id: number, newTecnology: ITecs.ITecnology)
    : Promise<ITecs.ITecnology> {
    const tec = await this.repo.findOneBy({ id });
    if (!tec) {
      throw new NotFoundException(notFoundMessage);
    }
    Object.assign(tec, newTecnology);
    return this.repo.save(tec);
  }

  async addTecnology(tecnology: ITecs.ITecnology): Promise<ITecs.ITecnology> {
    const tecExists = await this.repo.findOneBy({ name: tecnology.name });
    if (tecExists) {
      throw new BadRequestException('Já existe uma tecnologia com esse nome');
    }
    const tec = await this.repo.create(tecnology);
    await this.repo.save(tec);
    return tec;
  }

  async getAll(): Promise<ITecs.ITecnology[]> {
    return this.repo.find();
  }

  async removeTecnology(id: number): Promise<void> {
    const tecExists = await this.repo.findOneBy({ id });
    if (!tecExists) {
      throw new NotFoundException(notFoundMessage);
    }
    const tec = await this.repo.findOneBy({ id });
    await this.repo.remove(tec);
  }
}
