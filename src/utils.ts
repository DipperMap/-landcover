export const getEnv = (url: string) =>
  process.env.NODE_ENV !== "development" ? `/api${url}` : url;
