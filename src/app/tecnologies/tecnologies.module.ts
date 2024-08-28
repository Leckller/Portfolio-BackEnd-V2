import { Module } from '@nestjs/common';
import { TecnologiesService } from './tecnologies.service';

@Module({
  providers: [TecnologiesService],
})
export class TecnologiesModule {}
