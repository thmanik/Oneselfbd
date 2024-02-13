import config from "@/config/config";
import TGenericResponse from "@/types/response";

const useQuery = async (
  endPoint: string,
  reqConfig: Record<string, unknown> = { cache: "no-store" }
) => {
  let error = null;
  let data = null;
  try {
    const req = await fetch(`${config.base_url}/api/v1${endPoint}`, reqConfig);
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
