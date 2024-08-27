import { Module } from '@nestjs/common';
import { ProjectsController } from './controllers/projects/projects.controller';
import { TecnologiesController } from './controllers/tecnologies/tecnologies.controller';

@Module({
  controllers: [ProjectsController, TecnologiesController],
})
export class AppModule {}
