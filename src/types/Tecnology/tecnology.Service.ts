import ITecnology from './tecnology';

export default interface ITecnologyService {
  getAll(): Promise<ITecnology[]>,
  addTecnology(tecnology: Omit<ITecnology, 'id'>): Promise<ITecnology>,
  removeTecnology(id: number): Promise<void>,
  updateTecnology(id: number, tec: ITecnology): Promise<ITecnology>
}
