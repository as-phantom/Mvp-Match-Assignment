export interface ResponseDTO<T> {
  code: string;
  data: T;
  error: string;
}
