import IProject from './Project';

export default interface IProjectService {
  getProjects(): Promise<IProject[]>,
  addProject(project: Omit<IProject, 'id'>): Promise<IProject>,
  removeProject(id: number): Promise<void>,
  updateProject(id: number, newProject: IProject): Promise<IProject>
}
