import { ResponseDTO } from 'src/dto/response/responseDTO';

export async function mutation<T, K>(url: string, payload: T, method: string = 'POST'): Promise<K | null> {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseJSON = await response.json();
  const responseDTO = responseJSON as ResponseDTO<K>;

  if (responseDTO.error) {
    return null;
  }

  if (!responseDTO.data) {
    return null;
  }

  return responseDTO.data;
}
