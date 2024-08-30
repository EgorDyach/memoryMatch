import { ApiResponse, QueryParams } from "@type/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (e: any, httpError = true): string => {
  let errorData = e?.response?.data;
  if (!errorData && httpError) return e?.message || e;
  errorData = errorData || e;
  if (typeof errorData === "string") return errorData;
  if (Array.isArray(errorData)) {
    return errorData.map((data) => getErrorMessage(data, httpError)).join(", ");
  }
  return Object.values(errorData)
    .map((data) => getErrorMessage(data, httpError))
    .join(", ");
};

export const getEmptyApiResponse = <T = unknown>(): ApiResponse<T> => ({
  count: 0,
  results: [],
  next: null,
  previous: null,
});

export function buildUrlWithParams(url: string, params: QueryParams): string {
  const queryString = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  return `${url}${url.includes("?") ? "&" : "?"}${queryString}`;
}
