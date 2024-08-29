import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ITecs } from '../../types';
import { CreateTecnologyDTO } from './DTO/create-tecnology';
import { TecnologiesService } from './tecnologies.service';

@Controller('tecnologies')
export class TecnologiesController {
  constructor(private service: TecnologiesService) {}

  @Get()
  async getAll(): Promise<ITecs.ITecnology[]> {
    return this.service.getAll();
  }

  @Post()
  async addTecnology(@Body() tecnology: CreateTecnologyDTO): Promise<ITecs.ITecnology> {
    return this.service.addTecnology(tecnology);
  }

  @Delete('/:id')
  async removeTecnology(@Param() params: { id: number }): Promise<void> {
    return this.service.removeTecnology(params.id);
  }

  @Patch('/:id')
  async updateTecnology(@Param() params: { id: number }, @Body() tec: CreateTecnologyDTO)
    : Promise<ITecs.ITecnology> {
    return this.service.updateTecnology(params.id, tec);
  }
}
