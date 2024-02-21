import config from "@/config/config";
import objectToSearchParams from "@/lib/ec/objectToSearchParams";
import TGenericResponse from "@/types/response";

export type TQueryOptions = {
  searchParams: Record<string, string | string[] | undefined>;
  reqConfig?: Record<string, unknown>;
};

const useQuery = async (endPoint: string, queryOptions?: TQueryOptions) => {
  let url = `${config.base_url}/api/v1${endPoint}`;

  if (queryOptions) {
    if (queryOptions.reqConfig && !queryOptions.reqConfig.cache) {
      queryOptions.reqConfig.cache = "no-store";
    }
    if (Object.keys(queryOptions.searchParams || {}).length) {
      const modifiedSearchParams = objectToSearchParams(
        queryOptions.searchParams
      );
      // console.log(20, modifiedSearchParams);
      url = url.concat("?", modifiedSearchParams);
    }
  }
  let error = null;
  let data = null;
  try {
    const req = await fetch(url, queryOptions?.reqConfig);
    const res = (await req.json()) as TGenericResponse;
    if (res.success) {
      data = res;
    } else {
      throw new Error(res.message);
    }
  } catch (err) {
    error = err;
  }
  return { data, error };
};

export default useQuery;
