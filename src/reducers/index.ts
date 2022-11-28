import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import notificationSlice, { NotificationState } from '@/reducers/modules/notification_v2';
import type { Reducer } from '@reduxjs/toolkit';

type initialState = {
    notification: NotificationState;
};

const rootReducer = (state: initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;

        default: {
            const combinedReducer = combineReducers({
                notification: notificationSlice.reducer,
            });
            return combinedReducer(state, action);
        }
    }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
