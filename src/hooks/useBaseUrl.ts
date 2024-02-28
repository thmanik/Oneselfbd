export const useBaseUrl = (): string => {
  return process.env.BASE_URL || "http://localhost:5000";
};
