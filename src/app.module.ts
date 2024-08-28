import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TecnologiesModule } from './app/tecnologies/tecnologies.module';
import { ProjectsModule } from './app/projects/projects.module';
import { Tecnology } from './Entities/Tecnology.entity';
import { Project } from './Entities/Project.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Tecnology, Project],
      synchronize: true,
    }),
    TecnologiesModule,
    ProjectsModule],
})
export class AppModule {}
