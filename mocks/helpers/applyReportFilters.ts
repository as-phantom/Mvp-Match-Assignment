import { GetReportRequestDTO } from 'src/dto/request/getReportRequestDTO';
import { GetReportResponseDTO } from 'src/dto/response/getReportResponseDTO';

export function applyReportFilters(
  getReportRequestDTO: GetReportRequestDTO,
  getReportResponseDTO: GetReportResponseDTO
): GetReportResponseDTO {
  const from: number = new Date(getReportRequestDTO.from).getTime();
  const to: number = new Date(getReportRequestDTO.to).getTime();
  const { projectId, gatewayId } = getReportRequestDTO;

  return {
    ...getReportResponseDTO,
    data: getReportResponseDTO.data.filter((report) => {
      const created: number = new Date(report.created).getTime();
      const withinDateRange: boolean = created >= from && created <= to;

      let isCompliant: boolean = withinDateRange;

      if (projectId) {
        isCompliant &&= report.projectId === projectId;
      }

      if (gatewayId) {
        isCompliant &&= report.gatewayId === gatewayId;
      }

      return isCompliant;
    }),
  };
}
