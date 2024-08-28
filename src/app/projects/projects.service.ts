import { Injectable } from '@nestjs/common';
import { IProjs } from '../../types';
import { ProjectsRepository } from './projects.repository';

@Injectable()
export class ProjectsService implements IProjs.IProjectRepository {
  // Pelo visto n da p fazer injeção de dependência com inversão de dependência
  constructor(private repository: ProjectsRepository) {}

  addProject(project: IProjs.IProject): void {
    this.repository.addProject(project);
  }

  getProjects(): IProjs.IProject[] {
    return this.repository.getProjects();
  }

  removeProject(id: number): void {
    this.repository.removeProject(id);
  }
}
