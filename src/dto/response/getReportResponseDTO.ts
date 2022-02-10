import { ResponseDTO } from 'src/dto/response/responseDTO';
import { IReport } from 'src/interfaces/report.interface';

export interface GetReportResponseDTO extends ResponseDTO<IReport[]> {}
