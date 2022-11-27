import { combineReducers } from 'redux';

import notification from './modules/notification';

const rootReducer = combineReducers({
    notification,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
