import * as React from 'react';
import loadable from '@loadable/component';
import { useTheme } from '@mui/material/styles';
import { Box } from './JsonViewer.styled';

const ReactJson = loadable(() => import('react-json-view'));

type JsonViewerProps = {
    name?: string | null;
    data: any;
    collapsed?: boolean | number;
};

const JsonViewer = (props: JsonViewerProps) => {
    const { data, collapsed = false, name = null } = props;
    const theme = useTheme();
    return (
        <Box>
            <ReactJson
                name={name}
                src={data}
                theme={theme.palette.mode === 'light' ? 'rjv-default' : 'ocean'}
                collapsed={collapsed}
                style={{
                    borderRadius: 0,
                    padding: 20,
                    overflow: 'scroll',
                    maxHeight: 500,
                    background: theme.palette.mode === 'light' ? theme.palette.background.default : 'rgba(0,0,0,0.3)',
                }}
            />
        </Box>
    );
};

export default JsonViewer;
