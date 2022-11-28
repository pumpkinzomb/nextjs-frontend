import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NotificationState = {
    messages: any[];
};

const initialState: NotificationState = {
    messages: [],
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification: (
            state: NotificationState,
            action: PayloadAction<{ id: string; type: string; contents: string }>,
        ) => {
            const newMessages = state.messages;
            newMessages.push(action.payload);
            state.messages = newMessages;
        },
        deleteNotification: (state: NotificationState, action: PayloadAction<string>) => {
            const newMessages = state.messages.filter((item) => item.id !== action.payload);
            state.messages = newMessages;
        },
    },
});

export const { setNotification, deleteNotification } = notificationSlice.actions;

export default notificationSlice;
