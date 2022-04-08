import React, { useContext, useState } from 'react';

type ThemeState = {
    theme: 'light' | 'dark' | string;
    setTheme(theme: 'light' | 'dark'): void;
};

const StateContext = React.createContext<ThemeState>({
    theme: 'dark',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTheme: () => {},
});

export const ThemeStateProvider = (props: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('dark');
    return (
        <StateContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {props.children}
        </StateContext.Provider>
    );
};

export const useThemeState = () => useContext(StateContext);
