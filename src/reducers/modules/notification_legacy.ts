import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { Appstate } from '@/utils/store';
import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';

import { RootState } from '@/reducers';
import {
    SET_NOTIFICATION,
    DELETE_NOTIFICATION,
    NotificationState,
    NotificationAction,
    NotificationPayload,
} from './notification.types';

const initialState: NotificationState = {
    messages: [],
};

const notification = handleActions<NotificationState, NotificationAction>(
    {
        [SET_NOTIFICATION]: (state, action) => {
            const newMessages = state.messages;
            newMessages.push(action.payload);
            return {
                ...state,
                messages: newMessages,
            };
        },

        [DELETE_NOTIFICATION]: (state, action) => {
            const newMessages = state.messages.filter((item) => item.id !== action.payload);
            return {
                ...state,
                messages: newMessages,
            };
        },
    },
    initialState,
);

export default notification;

export const setNotification =
    ({ id, type, contents }: NotificationPayload) =>
    (dispatch: Dispatch<NotificationAction>, getState: () => RootState) => {
        const payload = {
            id,
            type,
            contents,
        };
        dispatch({
            type: SET_NOTIFICATION,
            payload,
        });
    };

export const deleteNotification = (id: string) => ({
    type: DELETE_NOTIFICATION,
    payload: id,
});

// export const notificationSlice = createSlice({
//     name: 'notification',
//     initialState,
//     reducers: notification,
//     extraReducers: {
//         [HYDRATE]: (state, action) => {
//             if (!action.payload.notification.messages) {
//                 return state;
//             }
//             console.log('HYDRATE', action.payload.notification.messages);
//             state.messages = action.payload.notification.messages;
//         },
//     },
// });
