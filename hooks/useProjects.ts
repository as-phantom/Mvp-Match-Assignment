import { fetcher } from 'lib/fetcher';
import { GetProjectsResponseDTO } from 'src/dto/response/getProjectsResponseDTO';
import { IProject } from 'src/interfaces/project.interface';
import useSWR from 'swr';

function useProjects(): IProject[] | null {
  const { data, error } = useSWR<GetProjectsResponseDTO>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/projects`, fetcher);

  if (error) {
    return null;
  }

  if (!data) {
    return null;
  }

  return data.data;
}

export default useProjects;
