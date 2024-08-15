import { ReactNode } from 'react';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';
export type NotificationEvent = CustomEvent<{
  message: ReactNode;
  description?: ReactNode;
  type: NotificationType;
}>;

export const SHOW_NOTIFICATION_EVENT_NAME = 'showNotification';

const createNotificationEvent = (
  type: NotificationType,
  message?: ReactNode,
  description?: ReactNode,
): NotificationEvent => {
  return new CustomEvent(SHOW_NOTIFICATION_EVENT_NAME, {
    detail: { message, description, type },
  });
};

const fireEventOnBody = (event: NotificationEvent): void => {
  if (!window?.document?.body) {
    console.error("Can't fire CustomEvent");
    return;
  }
  window.document.body.dispatchEvent(event);
};

const getShowMessageFnForType =
  (type: NotificationType) => (message: ReactNode, description?: ReactNode) =>
    fireEventOnBody(createNotificationEvent(type, message, description));

export const showErrorNotification = getShowMessageFnForType('error');
export const showSuccessNotification = getShowMessageFnForType('success');
export const showInfoNotification = getShowMessageFnForType('info');
export const showWarningNotification = getShowMessageFnForType('warning');
