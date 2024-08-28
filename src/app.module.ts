import { Module } from '@nestjs/common';
import { ProjectsController } from './app/projects/projects.controller';
import { TecnologiesController } from './app/tecnologies/tecnologies.controller';
import { TecnologiesModule } from './app/tecnologies/tecnologies.module';

@Module({
  controllers: [ProjectsController, TecnologiesController],
  imports: [TecnologiesModule],
})
export class AppModule {}
