import { LayoutType1 } from '@/components/layouts';
import uniqId from 'uniqid';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import notification from '@/reducers/modules/notification_v2';
import axiosInterceptor from '@/utils/apiController';

import { Box, Stack } from './Test.styled';
import { useEffect } from 'react';

type TestProps = {
    name?: string;
};

const Test = (props: TestProps) => {
    const dispatch = useDispatch();
    const NotificationActions = bindActionCreators(notification.actions, dispatch);

    useEffect(() => {
        getTest();
    }, []);

    const handleOpenToast = (type: string) => {
        const id = uniqId();
        NotificationActions.setNotification({ id, type, contents: 'hello' });
    };

    const getTest = async () => {
        await axiosInterceptor.get('/api/ducks', {
            headers: {
                usetoast: 'default',
            },
        });
    };

    return (
        <LayoutType1>
            <Box>This is Test Page.</Box>
            <Box>
                <Button variant="outlined" onClick={() => handleOpenToast('success')} color={'success'}>
                    Success Toast
                </Button>
            </Box>
        </LayoutType1>
    );
};

export default Test;
