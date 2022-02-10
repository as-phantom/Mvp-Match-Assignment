import { ResponseDTO } from 'src/dto/response/responseDTO';
import { IUser } from 'src/interfaces/user.interface';

export interface GetUsersResponseDTO extends ResponseDTO<IUser[]> {}
