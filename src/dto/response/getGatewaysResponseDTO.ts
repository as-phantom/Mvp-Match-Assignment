import { ResponseDTO } from 'src/dto/response/responseDTO';
import { IGateway } from 'src/interfaces/gateway.interface';

export interface GetGatewaysResponseDTO extends ResponseDTO<IGateway[]> {}
