import { Injectable } from '@nestjs/common';
import { IProjs } from '../../types';

@Injectable()
export class ProjectsRepository implements IProjs.IProjectRepository {
  addProject(project: IProjs.IProject): void {

  }

  getProjects(): IProjs.IProject[] {
    return [];
  }

  removeProject(id: number): void {

  }
}
