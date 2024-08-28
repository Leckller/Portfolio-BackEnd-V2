import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tecnology } from '../../Entities/Tecnology.entity';
import { TecnologiesService } from './tecnologies.service';
import { TecnologiesRepository } from './tecnologies.repository';
import { TecnologiesController } from './tecnologies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tecnology])],
  controllers: [TecnologiesController],
  providers: [TecnologiesService, TecnologiesRepository],
})

export class TecnologiesModule {}
