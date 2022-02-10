import { fetcher } from 'lib/fetcher';
import { GetUsersResponseDTO } from 'src/dto/response/getUsersResponseDTO';
import { IUser } from 'src/interfaces/user.interface';
import useSWR from 'swr';

function useUsers(): IUser[] | null {
  const { data, error } = useSWR<GetUsersResponseDTO>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users`, fetcher);

  if (error) {
    return null;
  }

  if (!data) {
    return null;
  }

  return data.data;
}

export default useUsers;
