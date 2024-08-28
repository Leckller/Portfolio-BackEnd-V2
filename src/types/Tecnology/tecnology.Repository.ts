import ITecnology from './tecnology';

export default interface ITecnologyRepository {
  getAll(): ITecnology[],
  addTecnology(tecnology: ITecnology): void,
  removeTecnology(id: number): void,
}
