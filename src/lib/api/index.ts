import axios, { AxiosError } from "axios";
import { ENV } from "@lib/configs/enviorements";
import { ApiError, AppApi } from "@type/api";
import SessionService from "@lib/utils/sessionService";
import { showErrorNotification } from "@lib/utils/notification";
import { language } from "@constants/language";

const defaultHeaders = {
  "Accept-Language": "ru",
  "Content-type": "application/json",
};

const createRequestInstance = (addAuthHeader: boolean): AppApi => {
  const instance = axios.create({
    baseURL: ENV.apiBaseUrl,
    headers: defaultHeaders,
    withCredentials: true,
  });

  if (addAuthHeader) {
    instance.interceptors.request.use((request) => {
      request.headers["Authorization"] = `Bearer ${SessionService.accessToken}`;
      return request;
    });
  }

  instance.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => {
      if (error.status === 401) {
        SessionService.logout();
        return;
      } else if (error.status === 500) {
        const lang = localStorage.getItem("language");
        showErrorNotification(
          lang
            ? language[lang as "en" | "ru"]["notifications"][
                "serverIsntAvailable"
              ]
            : "Server isn't available"
        );
        return;
      }
      const errorObject = error.response?.data as ApiError | undefined;
      if (!!errorObject && typeof errorObject === "object") {
        throw Object.fromEntries(
          errorObject.errors.map((v) => [v.code, v.detail])
        );
      }
      throw error.message;
    }
  );
  return instance as AppApi;
};

export const request = createRequestInstance(true);
