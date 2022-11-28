export const SET_NOTIFICATION = 'NOTIFICATION/SET_NOTIFICATION' as const;
export const DELETE_NOTIFICATION = 'NOTIFICATION/DELETE_NOTIFICATION' as const;

export type setNotification = {
    type: typeof SET_NOTIFICATION;
    payload: NotificationPayload;
};
export type deleteNotification = {
    type: typeof DELETE_NOTIFICATION;
    payload: any;
};

export type NotificationAction = setNotification | deleteNotification;
export type NotificationState = {
    messages: any[];
};
export type NotificationPayload = {
    id: string;
    type: string;
    contents: string;
};
