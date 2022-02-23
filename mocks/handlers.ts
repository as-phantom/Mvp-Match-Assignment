import { mockGatewaysResponse } from 'mocks/data/mockGateways';
import { mockProjectsResponse } from 'mocks/data/mockProjects';
import { mockReportResponse } from 'mocks/data/mockReport';
import { mockUsersResponse } from 'mocks/data/mockUsers';
import { applyReportFilters } from 'mocks/helpers/applyReportFilters';
import { rest } from 'msw';
import { GetReportRequestDTO } from 'src/dto/request/getReportRequestDTO';

export const handlers = [
  rest.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users`, (req, res, ctx) => {
    return res(ctx.json(mockUsersResponse));
  }),
  rest.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/projects`, (req, res, ctx) => {
    return res(ctx.json(mockProjectsResponse));
  }),
  rest.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/gateways`, (req, res, ctx) => {
    return res(ctx.json(mockGatewaysResponse));
  }),
  rest.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/report`, (req, res, ctx) => {
    return res(ctx.json(applyReportFilters(req.body as GetReportRequestDTO, mockReportResponse)));
  }),
];
