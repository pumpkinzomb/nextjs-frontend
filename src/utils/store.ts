import { Action, combineReducers } from 'redux';
import { configureStore, ThunkAction, AnyAction, CombinedState } from '@reduxjs/toolkit';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import notificationSlice from '@/reducers/modules/notification_v2';

const isProduction = process.env.NEXT_PUBLIC_REACT_APP_MODE === 'production' ? true : false;

const makeStore = (context: Context) => {
    return configureStore({
        reducer: combineReducers({
            notification: notificationSlice.reducer,
        }),
        devTools: !isProduction,
    });
};

export type Appstore = ReturnType<typeof makeStore>;
export type Appstate = ReturnType<Appstore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, Appstate, unknown, Action>;

export const wrapper = createWrapper<Appstore>(makeStore);
