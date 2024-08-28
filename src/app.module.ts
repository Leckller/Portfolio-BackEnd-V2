import { Module } from '@nestjs/common';
import { TecnologiesModule } from './app/tecnologies/tecnologies.module';
import { ProjectsModule } from './app/projects/projects.module';

@Module({
  imports: [TecnologiesModule, ProjectsModule],
})
export class AppModule {}
