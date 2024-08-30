import { enqueueSnackbar } from "notistack";

const getShowMessageFnForType =
  (type: "default" | "error" | "success" | "info" | "warning") =>
  (msg: string | number) =>
    enqueueSnackbar(msg, { variant: type });

export const showDefaultNotification = getShowMessageFnForType("error");
export const showErrorNotification = getShowMessageFnForType("error");
export const showSuccessNotification = getShowMessageFnForType("success");
export const showInfoNotification = getShowMessageFnForType("info");
export const showWarningNotification = getShowMessageFnForType("warning");
