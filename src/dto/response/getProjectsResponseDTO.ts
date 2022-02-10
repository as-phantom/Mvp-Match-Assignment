import { ResponseDTO } from 'src/dto/response/responseDTO';
import { IProject } from 'src/interfaces/project.interface';

export interface GetProjectsResponseDTO extends ResponseDTO<IProject[]> {}
