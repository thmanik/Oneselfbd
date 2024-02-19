export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TMetaAndData<T = null> = {
  meta: TMeta;
  data: T;
};

type TGenericResponse<T = null> = {
  success: boolean;
  message: string;
  data: T | TMetaAndData<T>;
};

export default TGenericResponse;
