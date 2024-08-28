import { Module } from '@nestjs/common';
import { TecnologiesService } from './tecnologies.service';
import { TecnologiesRepository } from './tecnologies.repository';
import { TecnologiesController } from './tecnologies.controller';

@Module({
  controllers: [TecnologiesController],
  providers: [TecnologiesService, TecnologiesRepository],
})

export class TecnologiesModule {}
