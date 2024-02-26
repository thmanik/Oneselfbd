export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

type TGenericResponse<T = unknown> = {
  success?: boolean;
  message?: string;
  data?: T;
  meta?: TMeta;
};

export type TErrorMessages = {
  path: string;
  message: string;
};

export type TGenericErrorResponse = {
  success?: boolean;
  message?: string;
  errorMessages: TErrorMessages[];
};

export default TGenericResponse;
