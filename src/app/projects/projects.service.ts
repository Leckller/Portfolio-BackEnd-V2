import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../../Entities/Project.entity';
import { IProjs } from '../../types';

const notFoundMessage = '';

@Injectable()
export class ProjectsService implements IProjs.IProjectService {
  // Pelo visto n da p fazer injeção de dependência com inversão de dependência
  constructor(@InjectRepository(Project) private repository: Repository<Project>) {}

  async addProject(project: Omit<IProjs.IProject, 'id'>): Promise<IProjs.IProject> {
    const projExists = await this.repository.findOneBy({ title: project.title });
    if (projExists) {
      throw new BadRequestException('Já existe um projeto com esse nome');
    }
    const proj = await this.repository.create(project);
    await this.repository.save(proj);
    return proj;
  }

  async getProjects(): Promise<IProjs.IProject[]> {
    return this.repository.find();
  }

  async removeProject(id: number): Promise<void> {
    const projExists = await this.repository.findOneBy({ id });
    if (!projExists) {
      throw new NotFoundException(notFoundMessage);
    }
    await this.repository.remove(projExists);
  }

  async updateProject(id: number, newProject: IProjs.IProject): Promise<IProjs.IProject> {
    const projExists = await this.repository.findOneBy({ id });
    if (!projExists) {
      throw new NotFoundException(notFoundMessage);
    }
    Object.assign(projExists, newProject);
    return this.repository.save(projExists);
  }
}
