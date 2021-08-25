export * from './common';
export * from './dark';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { dark } from './DefaultDark';

const themeMapper = {
    dark: dark,
};

export type VsThemes = keyof typeof themeMapper;

export const ThemeContext = React.createContext({
    theme: 'dark',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toggleTheme: (_theme: VsThemes) => undefined,
});

export const useTheme = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    return {
        theme: themeMapper[theme],
        toggleTheme,
        themeName: theme,
    };
};

export const StyledThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = React.useState('dark');

    const toggleTheme = (theme: VsThemes) => {
        setTheme(theme);
    };
    const values = React.useMemo(
        () => ({
            theme,
            toggleTheme,
        }),
        [toggleTheme, theme],
    );

    return (
        <ThemeContext.Provider value={values}>
            <ThemeProvider theme={themeMapper[theme]}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
