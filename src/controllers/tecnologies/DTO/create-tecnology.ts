import { IsString } from 'class-validator';

export class CreateTecnologyDTO {
  @IsString()
    name: string;

  @IsString()
    img: string;
}
