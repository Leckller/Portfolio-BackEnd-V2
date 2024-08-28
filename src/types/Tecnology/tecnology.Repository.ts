import ITecnology from './tecnology';

export default interface ITecnologyRepository {
  getAll(): ITecnology[],
  addTecnology(): void,
  removeTecnology(): void,
}
