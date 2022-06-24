import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import StylesEngineProvider from '@mui/material/StyledEngineProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/rubik';

import Route from './Route';
import { ThemeContext } from './context';
import getTheme from './theme';

const Application = () => {
    const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: dark)`);
    const [mode, setMode] = React.useState<'light' | 'dark' | 'system'>(() => {
        const m = localStorage.getItem('theme');
        if (m) {
            return m as 'light' | 'dark' | 'system';
        }
        return prefersDarkMode ? 'dark' : 'light';
    });

    const theme = React.useMemo(() => getTheme(mode === 'dark'), [mode]);

    const onChangeMode = React.useCallback((m: 'light' | 'dark' | 'system') => {
        localStorage.setItem('theme', m);
        setMode(m);
    }, []);

    return (
        <StylesEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <ThemeContext.Provider value={{ mode, onChangeMode }}>
                        <Router>
                            <Route />
                        </Router>
                    </ThemeContext.Provider>
                </LocalizationProvider>
            </ThemeProvider>
        </StylesEngineProvider>
    );
};

export default Application;
