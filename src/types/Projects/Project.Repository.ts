import IProject from './Project';

export default interface IProjectRepository {
  getProjects(): IProject[],
  addProject(project: IProject): void,
  removeProject(id: number): void,
}
