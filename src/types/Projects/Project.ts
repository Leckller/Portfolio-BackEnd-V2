import { ITecnology } from '../Tecnology';

export default interface IProject {
  id?: number,
  title: string,
  description: string,
  tecnologies: ITecnology[],
  codeLink: string,
  webLink: string,
}
