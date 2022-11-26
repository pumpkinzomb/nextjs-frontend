import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

import { myTheme } from '@/styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';

type ProvidersWrapperProps = {
    children: React.ReactNode;
};

const ProvidersWrapperContext = createContext<{
    toggleColorMode: () => void;
}>({
    toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ProvidersWrapperContext);

const ProvidersWrapper = (props: ProvidersWrapperProps) => {
    const { children } = props;
    const getThemeMode = localStorage.getItem('theme_mode') === 'dark' ? 'dark' : 'light';
    const [mode, setMode] = useState<'light' | 'dark'>(getThemeMode);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
                localStorage.setItem('theme_mode', mode === 'light' ? 'dark' : 'light');
            },
        }),
        [],
    );
    const theme = useMemo(
        () =>
            createTheme({
                ...myTheme,
                palette: {
                    mode,
                    ...myTheme.palette,
                },
            }),
        [mode],
    );
    return (
        <ProvidersWrapperContext.Provider value={colorMode}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <StyledComponentThemeProvider theme={theme}>
                        <GlobalStyles />
                    </StyledComponentThemeProvider>
                    {children}
                </ThemeProvider>
            </StyledEngineProvider>
        </ProvidersWrapperContext.Provider>
    );
};

export default ProvidersWrapper;
