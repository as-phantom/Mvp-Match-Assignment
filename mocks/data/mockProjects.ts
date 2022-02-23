import { GetProjectsResponseDTO } from 'src/dto/response/getProjectsResponseDTO';

export const mockProjectsResponse: GetProjectsResponseDTO = {
  code: '200',
  data: [
    {
      description: 'description 0',
      gatewayIds: ['0'],
      image: 'image 0',
      industry: 'industry 0',
      name: 'project 0',
      projectId: '0',
      rule: 'rule 0',
      structure: 'structure 0',
      userIds: ['0'],
      website: 'website 0',
    },
    {
      description: 'description 1',
      gatewayIds: ['1'],
      image: 'image 1',
      industry: 'industry 1',
      name: 'project 1',
      projectId: '1',
      rule: 'rule 1',
      structure: 'structure 1',
      userIds: ['1'],
      website: 'website 1',
    },
  ],
  error: null,
};
