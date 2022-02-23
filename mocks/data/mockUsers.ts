import { GetUsersResponseDTO } from 'src/dto/response/getUsersResponseDTO';

export const mockUsersResponse: GetUsersResponseDTO = {
  code: '200',
  data: [
    {
      email: 'dick.feynman@email.com',
      firstName: 'Richard',
      lastName: 'Feynman',
      userId: '0',
    },
  ],
  error: null,
};
