import { IsString } from 'class-validator';
import { ITecs } from '../../../types';

export class CreateTecnologyDTO implements ITecs.ITecnology {
  @IsString()
    name: string;

  @IsString()
    img: string;
}
