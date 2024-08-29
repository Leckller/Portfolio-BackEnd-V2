import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tecnology } from '../../Entities/Tecnology.entity';
import { TecnologiesController } from './tecnologies.controller';
import { TecnologiesService } from './tecnologies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tecnology])],
  controllers: [TecnologiesController],
  providers: [TecnologiesService],
})

export class TecnologiesModule {}
