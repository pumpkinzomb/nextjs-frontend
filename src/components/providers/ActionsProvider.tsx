import * as React from 'react';
import { createContext, useContext } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import notification from '@/reducers/modules/notification_v2';

type ActionsContextProviderProps = {
    children: React.ReactNode;
};

const ActionsContext = createContext<{
    NotificationActions: typeof notification.actions;
}>({
    NotificationActions: notification.actions,
});

export const useActions = () => useContext(ActionsContext);

const ActionsContextProvider = (props: ActionsContextProviderProps) => {
    const { children } = props;
    const dispatch = useDispatch();

    const NotificationActions = bindActionCreators(notification.actions, dispatch);

    return <ActionsContext.Provider value={{ NotificationActions }}>{children}</ActionsContext.Provider>;
};

export default ActionsContextProvider;
