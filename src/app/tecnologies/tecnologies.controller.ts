import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTecnologyDTO } from './DTO/create-tecnology';

@Controller('tecnologies')
export class TecnologiesController {
  @Get()
  listTecnologies(@Query('language') language = false) {
    return language;
  }

  @Post()
  addTecnology(@Body() body: CreateTecnologyDTO) {
    return body;
  }

  @Patch('/:id')
  editTecnology(@Param('id') id: number) {
    return id;
  }
}
