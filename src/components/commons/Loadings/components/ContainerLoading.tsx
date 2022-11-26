import * as React from 'react';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box } from './ContainerLoading.styled';

let timeout: any;

const ContainerLoading = () => {
    const [error, setError] = useState(false);
    // const history = useHistory();
    // const location = useLocation();

    useEffect(() => {
        timeout = setTimeout(() => {
            setError(true);
            clearTimeout(timeout);
        }, 10000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const handleRefresh = () => {
        // history.replace(location.pathname || '/');
        window.location.reload();
    };

    return (
        <React.Fragment>
            {error ? (
                <Box className="loading-error">
                    <span>
                        An error occurred on this page.
                        <br /> Please press the refresh button.
                    </span>
                    <Button variant="outlined" startIcon={<RefreshIcon />} onClick={handleRefresh}>
                        refresh
                    </Button>
                </Box>
            ) : (
                <Box className="loading">
                    <CircularProgress />
                </Box>
            )}
        </React.Fragment>
    );
};

export default ContainerLoading;
