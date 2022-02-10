import { fetcher } from 'lib/fetcher';
import { GetGatewaysResponseDTO } from 'src/dto/response/getGatewaysResponseDTO';
import { IGateway } from 'src/interfaces/gateway.interface';
import useSWR from 'swr';

function useGateways(): IGateway[] | null {
  const { data, error } = useSWR<GetGatewaysResponseDTO>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/gateways`, fetcher);

  if (error) {
    return null;
  }

  if (!data) {
    return null;
  }

  return data.data;
}

export default useGateways;
