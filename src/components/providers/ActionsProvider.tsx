import * as React from 'react';
import { createContext, useContext } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import * as notificationActions from '@/reducers/modules/notification';

type ActionsContextProviderProps = {
    children: React.ReactNode;
};

const ActionsContext = createContext<{
    NotificationActions: typeof notificationActions;
}>({
    NotificationActions: notificationActions,
});

export const useActions = () => useContext(ActionsContext);

const ActionsContextProvider = (props: ActionsContextProviderProps) => {
    const { children } = props;
    const dispatch = useDispatch();

    const NotificationActions = bindActionCreators(notificationActions, dispatch);

    return <ActionsContext.Provider value={{ NotificationActions }}>{children}</ActionsContext.Provider>;
};

export default ActionsContextProvider;
