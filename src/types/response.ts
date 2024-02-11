type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

type TGenericResponse<T = null> = {
  success: boolean;
  message: string;
  data:
    | T
    | {
        meta: TMeta;
        data: T;
      };
};

export default TGenericResponse;
