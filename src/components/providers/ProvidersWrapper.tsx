import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import DialogProvider from '@/components/providers/DialogProvider';
import NotificationProvider from '@/components/providers/ToastProvider';
import ActionsProvider from '@/components/providers/ActionsProvider';
import { myTheme } from '@/styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';

type ThemeMode = 'light' | 'dark';

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
    let getThemeMode = 'light';
    if (typeof window !== 'undefined') {
        getThemeMode = localStorage.getItem('theme_mode') === 'dark' ? 'dark' : 'light';
    }
    const [mode, setMode] = useState<ThemeMode>(getThemeMode as ThemeMode);

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
                    <NotificationProvider>
                        <DialogProvider>
                            <ActionsProvider>
                                <CssBaseline />
                                <StyledComponentThemeProvider theme={theme}>
                                    <GlobalStyles />
                                </StyledComponentThemeProvider>
                                {children}
                            </ActionsProvider>
                        </DialogProvider>
                    </NotificationProvider>
                </ThemeProvider>
            </StyledEngineProvider>
        </ProvidersWrapperContext.Provider>
    );
};

export default ProvidersWrapper;
