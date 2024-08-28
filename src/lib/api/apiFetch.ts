import { OptionsObject } from "notistack";

let activeRequests = 0;

const apiURL = import.meta.env.VITE_API_URL || "https://timeton.io/api";

export default async function apiFetch(
  url: string,
  method: string,
  body: Record<string, unknown> | null = null,
  enqueueSnackbar: (msg: string, options?: OptionsObject) => void,
  showLoading?: () => void,
  hideLoading?: () => void
) {
  activeRequests++;
  if (activeRequests === 1) {
    if (showLoading) showLoading();
  }

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${apiURL}${url}`, options);
    const data = await response.json();

    if (response.status === 401) {
      throw new Error(data.message);
    }

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    if (data.status === false) {
      throw new Error(data.message);
    }

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      enqueueSnackbar(error.message, { variant: "error" });
      if (error.message === "login.failed") {
        // window.location.reload();
      }
    } else {
      enqueueSnackbar("An unknown error occurred", { variant: "error" });
    }
    throw error;
  } finally {
    activeRequests--;
    if (activeRequests === 0) {
      if (hideLoading) hideLoading();
    }
  }
}
