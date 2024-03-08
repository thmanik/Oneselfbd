import config from "@/config/config";
import objectToSearchParams from "@/lib/ec/objectToSearchParams";
import TGenericResponse from "@/types/response";

const useQuery = async <T,>(
  endPoint: string,
  searchParams?: Record<string, string | string[] | undefined>,
  reqConfig?: Record<string, unknown>
): Promise<[TGenericResponse<T>]> => {
  let url = `${config.base_url}/api/v1${endPoint}`;

  if (!reqConfig?.cache) {
    const newData = {
      catch: "no-cache",
      ...reqConfig,
    };
    reqConfig = newData;
  }

  if (Object.keys(searchParams || {}).length) {
    const modifiedSearchParams = objectToSearchParams(
      searchParams as Record<string, string>
    );
    url = url.concat("?", modifiedSearchParams);
  }

  let data: null | TGenericResponse<T> = {};

  try {
    const req = await fetch(url);
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
