import { IsString } from 'class-validator';
import { IProjs } from '../../../types';

export class CreateProjectDTO implements IProjs.IProject {
  @IsString()
    title: string;

  @IsString()
    description: string;

  @IsString()
    codeLink: string;

  @IsString()
    webLink: string;
}
