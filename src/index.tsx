import { createTheme } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { darkTheme } from './themes';
// import { ThemeStateProvider } from './ThemeStateProvider';
const theme = createTheme();

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
