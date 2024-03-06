export const useBaseUrl = (): string => {
  return process.env.BASE_URL || "http://localhost:5000";
};

export const baseUrlFn = (): string => {
  return process.env.BASE_URL || "http://localhost:5000";
};
