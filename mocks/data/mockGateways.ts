import { GetGatewaysResponseDTO } from 'src/dto/response/getGatewaysResponseDTO';

export const mockGatewaysResponse: GetGatewaysResponseDTO = {
  code: '200',
  data: [
    {
      apiKey: 'apiKey 0',
      description: 'description 0',
      gatewayId: '0',
      name: 'gateway 0',
      secondaryApiKey: 'secondaryApiKey 0',
      type: 'type 0',
      userIds: ['0'],
    },
    {
      apiKey: 'apiKey 1',
      description: 'description 1',
      gatewayId: '1',
      name: 'gateway 1',
      secondaryApiKey: 'secondaryApiKey 1',
      type: 'type 1',
      userIds: ['1'],
    },
  ],
  error: null,
};
