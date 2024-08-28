import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateTecnologyDTO } from './DTO/create-tecnology';
import { TecnologiesService } from './tecnologies.service';

@Controller('tecnologies')
export class TecnologiesController {
  constructor(private service: TecnologiesService) {}

  @Get()
  listTecnologies(@Query('language') language = false) {
    return language;
  }

  @Post()
  addTecnology(@Body() body: CreateTecnologyDTO) {
    const { img, name } = body;
    this.service.addTecnology({ img, name });
  }

  @Delete('/:id')
  removeTecnology(@Param('id') id: number) {
    this.removeTecnology(id);
    return id;
  }
}
