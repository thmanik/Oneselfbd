import config from "@/config/config";
import objectToSearchParams from "@/lib/ec/objectToSearchParams";
import TGenericResponse from "@/types/response";

export type TQueryOptions = {
  searchParams: Record<string, string | string[] | undefined>;
  reqConfig?: Record<string, unknown>;
};

const useQuery = async <T,>(
  endPoint: string,
  queryOptions?: TQueryOptions
): Promise<[TGenericResponse<T>]> => {
  let url = `${config.base_url}/api/v1${endPoint}`;
  if (queryOptions) {
    if (queryOptions.reqConfig && !queryOptions.reqConfig.cache) {
      queryOptions.reqConfig.cache = "no-store";
    }
    if (Object.keys(queryOptions.searchParams || {}).length) {
      const modifiedSearchParams = objectToSearchParams(
        queryOptions.searchParams
      );
      url = url.concat("?", modifiedSearchParams);
    }
  }

  let data: null | TGenericResponse<T> = {};
  try {
    const req = await fetch(url, queryOptions?.reqConfig);
    const res = (await req.json()) as TGenericResponse<T>;
    if (res.success) {
      data = res;
    } else {
      throw new Error(res.message);
    }
  } catch (err) {
    data = {
      success: false,
      message:
        (err as { message: string })?.message ??
        "Something went wrong or try again later",
    };
  }

  return [
    {
      success: data?.success,
      message: data?.message,
      data: data?.data as T,
      meta: data?.meta,
    },
  ];
};

export default useQuery;
