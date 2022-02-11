import { IGateway } from 'src/interfaces/gateway.interface';
import { IProject } from 'src/interfaces/project.interface';

export interface IFilters {
  from: string;
  to: string;
  project?: IProject;
  gateway?: IGateway;
}
