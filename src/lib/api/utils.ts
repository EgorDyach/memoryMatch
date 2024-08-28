import { AxiosError } from "axios";
import { showErrorNotification } from "@lib/utils/notification";
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

// только для запросов, где ошибку не нужно обрабатывать в компоненте
export const handledRequest =
  <T, ARGS>(
    requestFn: (...args: ARGS[]) => Promise<T>,
    title: string,
    returnValue: T
  ) =>
  async (...args: Parameters<typeof requestFn>) => {
    return requestFn(...args).catch((e) => {
      if ((e as AxiosError).status !== 403) {
        showErrorNotification(title, getErrorMessage(e, false));
      }
      return returnValue;
    });
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
