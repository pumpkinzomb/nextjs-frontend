import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/reducers';
import notificationModule from '@/reducers/modules/notification_v2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastProviderProps = {
    children: React.ReactNode;
};

const ToastProvider = ({ children }: ToastProviderProps) => {
    const notification = useSelector((state: RootState) => state.notification);
    const dispatch = useDispatch();

    const NotificationActions = bindActionCreators(notificationModule.actions, dispatch);

    const setToastMessages = (message: any) => {
        const toastFunction =
            message.type === 'success'
                ? toast.success
                : message.type === 'error'
                ? toast.error
                : message.type === 'warning'
                ? toast.warning
                : toast;

        toastFunction(message.contents, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    useEffect(() => {
        if (notification) {
            const messages = new Set(notification.messages);
            Array.from(messages).map((item: any) => {
                setToastMessages(item);
                NotificationActions.deleteNotification(item.id);
            });
        }
    }, [notification]);

    return (
        <React.Fragment>
            {children}
            <ToastContainer theme={'colored'} />
        </React.Fragment>
    );
};

export default ToastProvider;
