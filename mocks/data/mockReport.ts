import { GetReportResponseDTO } from 'src/dto/response/getReportResponseDTO';

// 00 01 10 11
export const mockReportResponse: GetReportResponseDTO = {
  code: '200',
  data: [
    {
      amount: 100,
      created: '2022-02-22',
      gatewayId: '0',
      modified: '2022-02-22',
      paymentId: '0',
      projectId: '0',
      userIds: ['0'],
    },
    {
      amount: 150,
      created: '2022-02-22',
      gatewayId: '0',
      modified: '2022-02-22',
      paymentId: '1',
      projectId: '1',
      userIds: ['0'],
    },
    {
      amount: 200,
      created: '2022-02-02',
      gatewayId: '1',
      modified: '2022-02-02',
      paymentId: '2',
      projectId: '0',
      userIds: ['0'],
    },
    {
      amount: 250,
      created: '2022-02-02',
      gatewayId: '1',
      modified: '2022-02-02',
      paymentId: '3',
      projectId: '1',
      userIds: ['0'],
    },
  ],
  error: null,
};
