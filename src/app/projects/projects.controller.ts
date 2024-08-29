import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IProject } from '../../types/Projects';
import { ProjectsService } from './projects.service';
import { CreateProjectDTO } from './DTO/project.DTO';

@Controller('projects')
export class ProjectsController {
  constructor(private service: ProjectsService) {}

  @Post()
  async addProject(@Body() project: CreateProjectDTO): Promise<IProject> {
    return this.service.addProject(project);
  }

  @Get()
  async getProjects(): Promise<IProject[]> {
    return this.service.getProjects();
  }

  @Delete('/:id')
  async removeProject(@Param() params: { id: number }): Promise<void> {
    return this.service.removeProject(params.id);
  }

  @Patch('/:id')
  async updateProject(@Param() params: { id: number }, newProject: CreateProjectDTO)
    : Promise<IProject> {
    return this.service.updateProject(params.id, newProject);
  }
}
